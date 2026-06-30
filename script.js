function showGuide() {
    let studentClass = document.getElementById("studentClass").value;
    let subject = document.getElementById("subject").value;
    let result = document.getElementById("result");

    if (studentClass === "" || subject === "") {
        result.innerHTML = "<p>Please select both class/exam and subject.</p>";
        return;
    }

    let guide = "";

    // Mathematics
    if (subject === "Math") {
        guide = `
            <h3>📘 Mathematics Guide</h3>

            <h4>Study Tips</h4>
            <ul>
                <li>Practice questions daily.</li>
                <li>Revise formulas regularly.</li>
                <li>Solve previous year papers.</li>
                <li>Focus on concepts rather than memorization.</li>
            </ul>

            <h4>Recommended Books</h4>
            <ul>
                <li>NCERT</li>
                <li>RD Sharma</li>
                <li>RS Aggarwal</li>
            </ul>

            <h4>Learning Resources</h4>
            <ul>
                <li>Khan Academy</li>
                <li>Physics Wallah</li>
                <li>Unacademy</li>
            </ul>
        `;
    }

    // Physics
    else if (subject === "Physics") {
        guide = `
            <h3>⚛️ Physics Guide</h3>

            <h4>Study Tips</h4>
            <ul>
                <li>Understand concepts first.</li>
                <li>Practice numericals every day.</li>
                <li>Make short notes of formulas.</li>
                <li>Revise derivations regularly.</li>
            </ul>

            <h4>Recommended Books</h4>
            <ul>
                <li>NCERT</li>
                <li>HC Verma</li>
                <li>DC Pandey</li>
            </ul>

            <h4>Learning Resources</h4>
            <ul>
                <li>Khan Academy</li>
                <li>Physics Wallah</li>
                <li>Vedantu</li>
            </ul>
        `;
    }

    // Chemistry
    else if (subject === "Chemistry") {
        guide = `
            <h3>🧪 Chemistry Guide</h3>

            <h4>Study Tips</h4>
            <ul>
                <li>Read NCERT thoroughly.</li>
                <li>Make reaction notes.</li>
                <li>Practice numerical questions regularly.</li>
                <li>Revise Organic Chemistry daily.</li>
            </ul>

            <h4>Recommended Books</h4>
            <ul>
                <li>NCERT</li>
                <li>OP Tandon</li>
                <li>Modern ABC Chemistry</li>
            </ul>

            <h4>Learning Resources</h4>
            <ul>
                <li>Physics Wallah</li>
                <li>Khan Academy</li>
                <li>Unacademy</li>
            </ul>
        `;
    }

    // Biology
    else if (subject === "Biology") {
        guide = `
            <h3>🌱 Biology Guide</h3>

            <h4>Study Tips</h4>
            <ul>
                <li>Read NCERT line by line.</li>
                <li>Create diagrams and flowcharts.</li>
                <li>Revise important terms regularly.</li>
                <li>Practice MCQs daily.</li>
            </ul>

            <h4>Recommended Books</h4>
            <ul>
                <li>NCERT Biology</li>
                <li>Trueman Biology</li>
            </ul>

            <h4>Learning Resources</h4>
            <ul>
                <li>Khan Academy</li>
                <li>Physics Wallah</li>
                <li>Vedantu</li>
            </ul>
        `;
    }

    // Exam-specific strategies
    if (studentClass === "JEE") {
        guide += `
            <h4>🎯 JEE Preparation Strategy</h4>
            <ul>
                <li>Study PCM daily.</li>
                <li>Solve mock tests every week.</li>
                <li>Focus on NCERT and advanced problems.</li>
                <li>Revise formulas regularly.</li>
            </ul>
        `;
    }

    if (studentClass === "NEET") {
        guide += `
            <h4>🎯 NEET Preparation Strategy</h4>
            <ul>
                <li>Read NCERT Biology thoroughly.</li>
                <li>Practice MCQs daily.</li>
                <li>Take mock tests regularly.</li>
                <li>Revise diagrams and concepts.</li>
            </ul>
        `;
    }

    if (studentClass === "NDA") {
        guide += `
            <h4>🎯 NDA Preparation Strategy</h4>
            <ul>
                <li>Prepare Mathematics and General Ability.</li>
                <li>Read newspapers daily.</li>
                <li>Practice previous year papers.</li>
                <li>Improve English and current affairs knowledge.</li>
            </ul>
        `;
    }

    result.innerHTML = `
        <h2>${studentClass} - ${subject}</h2>
        ${guide}
    `;
}
