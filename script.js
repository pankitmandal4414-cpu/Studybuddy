function showGuide() {
    let studentClass = document.getElementById("studentClass").value;
    let subject = document.getElementById("subject").value;
    let result = document.getElementById("result");

    if (studentClass === "" || subject === "") {
        result.innerHTML = "<p>Please select both class and subject.</p>";
        return;
    }

    let guide = "";

    if (subject === "Math") {
        guide = `
            <h3>Mathematics Guide</h3>
            <ul>
                <li>Practice problems daily.</li>
                <li>Understand concepts before memorizing formulas.</li>
                <li>Solve previous years' questions.</li>
            </ul>
        `;
    }
    else if (subject === "Physics") {
        guide = `
            <h3>Physics Guide</h3>
            <ul>
                <li>Focus on concepts and derivations.</li>
                <li>Practice numerical problems regularly.</li>
                <li>Revise formulas weekly.</li>
            </ul>
        `;
    }
    else if (subject === "Chemistry") {
        guide = `
            <h3>Chemistry Guide</h3>
            <ul>
                <li>Learn reactions through regular revision.</li>
                <li>Make short notes for formulas.</li>
                <li>Practice numerical questions in Physical Chemistry.</li>
            </ul>
        `;
    }
    else if (subject === "Biology") {
        guide = `
            <h3>Biology Guide</h3>
            <ul>
                <li>Read NCERT thoroughly.</li>
                <li>Create diagrams and flowcharts.</li>
                <li>Revise important terms regularly.</li>
            </ul>
        `;
    }

    result.innerHTML = `
        <h2>Class ${studentClass} - ${subject}</h2>
        ${guide}
    `;
}
