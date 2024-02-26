import React, { useState, useRef } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import "./GeneratePdf.css";
const GeneratePdf = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [signatureImage, setSignatureImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setSignatureImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const templatePdfUrl = "/fillable_pdf.PDF";
    const existingPdfBytes = await fetch(templatePdfUrl).then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const page = pdfDoc.getPages()[0];
    page.drawText(formData.name, {
      x: 100,
      y: 500,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(formData.email, {
      x: 100,
      y: 480,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(formData.age, {
      x: 100,
      y: 460,
      size: 12,
      color: rgb(0, 0, 0),
    });
    // Insert the signature image into PDF
    if (signatureImage) {
      const pngImage = await pdfDoc.embedPng(signatureImage);
      const pngDims = pngImage.scale(0.1);
      page.drawImage(pngImage, {
        x: 100,
        y: 440,
        width: pngDims.width,
        height: pngDims.height,
      });
    }

    const pdfBytes = await pdfDoc.save();
    const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "filled_form.pdf";
    link.click();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column gap-4 justify-content-center">
          <div>
            <input
              className="w-100 py-2 px-1 rounded "
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-100 py-2 px-1 rounded "
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              className="w-100 py-2 px-1 rounded "
              type="number"
              placeholder="Age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>
          <div className="file-upload-container">
            <label
              htmlFor="file-upload"
              className="file-upload-label second-field"
            >
              Singiture
              <input
                type="file"
                id="file-upload"
                className="file-upload-input"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileInputChange}
              />
            </label>
          </div>
          <div></div>
        </div>
        <div className="text-center">
          <button className="btn generate-btn px-4 fw-bold " type="submit">
            Build
          </button>
        </div>
      </form>
      {signatureImage && (
        <img src={signatureImage} alt="Signature" style={{ width: 100 }} />
      )}
    </div>
  );
};

export default GeneratePdf;
