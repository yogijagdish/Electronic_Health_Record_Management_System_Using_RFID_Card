import React from "react";

const ReportDownload = ({reporturl}) => {
    const handleDownload = () => {
        const link = document.createElement('a');

        const baseUrl = 'http://127.0.0.1:8000'
        link.href = baseUrl + reporturl;
        console.log(reporturl)
        link.download = 'report.pdf';
        console.log(link.href)
        link.click();
    };
    return(
        <div>
            <button onClick={handleDownload} className="btn btn-transparent"><i class="fas fa-download fa-lg"></i></button>
        </div>
    )
}

export default ReportDownload;