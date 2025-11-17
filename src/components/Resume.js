import React, { useState } from 'react';

const Resume = () => {
  const [pdfError, setPdfError] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rohith_R_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePdfError = () => {
    setPdfError(true);
  };

  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2>Resume</h2>
        
        <div className="resume-actions">
          <button onClick={handleDownload} className="btn primary download-btn">
            <i className="fas fa-download"></i> Download PDF
          </button>
          <a href="#contact" className="btn secondary">
            <i className="fas fa-envelope"></i> Contact Me
          </a>
        </div>

        <div className="resume-viewer">
          {!pdfError ? (
            <iframe
              src="/resume.pdf"
              title="Rohith R Resume"
              className="pdf-viewer"
              onError={handlePdfError}
            />
          ) : (
            <div className="pdf-fallback">
              <div className="fallback-content">
                <i className="fas fa-file-pdf"></i>
                <h3>Resume PDF</h3>
                <p>Click the download button above to view the full resume</p>
                <button onClick={handleDownload} className="btn primary">
                  <i className="fas fa-download"></i> Download Resume
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;