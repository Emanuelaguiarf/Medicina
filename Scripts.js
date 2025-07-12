document.addEventListener('DOMContentLoaded', function () {
    const materias = {
        "materia1": { name: "Anatomía", prereqs: [] },
        "materia2": { name: "Histologia", prereqs: [] },
        "materia3": { name: "Practica Hospitalar I", prereqs: [] },
        "materia4": { name: "Dx por Imágenes I", prereqs: [] },
        "materia5": { name: "Humanistica I", prereqs: [] },
        "materia6": { name: "Cibernetica I", prereqs: [] },
        "materia7": { name: "Cirugia Basica I", prereqs: [] },
        "materia8": { name: "Ingles I", prereqs: [] },
        "materia9": { name: "Italiano I", prereqs: [] },
        "materia10": { name: "Química Biológica", prereqs: ["materia1"] },
        "materia11": { name: "Fisiologia", prereqs: ["materia1"] },
        "materia12": { name: "Practica Hospitalar II", prereqs: ["materia3"] },
        "materia13": { name: "Dx por Imágenes II", prereqs: ["materia4"] },
        "materia14": { name: "Humanistica II", prereqs: ["materia5"] },
        "materia15": { name: "Cibernetica II", prereqs: ["materia6"] },
        "materia16": { name: "Cirugia Basica II", prereqs: ["materia7"] },
        "materia17": { name: "Ingles II", prereqs: ["materia8"] },
        "materia18": { name: "Italiano II", prereqs: ["materia9"] },
        "materia19": { name: "Anatomía Patológica", prereqs: ["materia10"] },
        "materia20": { name: "Farmacología", prereqs: ["materia10"] },
        "materia21": { name: "Microbiologia", prereqs: ["materia11"] },
        "materia22": { name: "Practica Hospitalar III", prereqs: ["materia12"] },
        "materia23": { name: "Dx por Imágenes III", prereqs: ["materia13"] },
        "materia24": { name: "Humanistica III", prereqs: ["materia14"] },
        "materia25": { name: "Cibernetica III", prereqs: ["materia15"] },
        "materia26": { name: "Cirugia Basica III", prereqs: ["materia16"] },
        "materia27": { name: "Ingles III", prereqs: ["materia17"] },
        "materia28": { name: "Italiano III", prereqs: ["materia18"] },
        "materia29": { name: "Medicina Interna I", prereqs: ["materia19"] },
        "materia30": { name: "Clínica Quirúrgica I", prereqs: ["materia20"] },
        "materia31": { name: "Practica Hospitalar IV", prereqs: ["materia22"] },
        "materia32": { name: "Dx por Imágenes IV", prereqs: ["materia23"] },
        "materia33": { name: "Humanistica IV", prereqs: ["materia24"] },
        "materia34": { name: "Cibernetica IV", prereqs: ["materia25"] },
        "materia35": { name: "Cirugia Basica IV", prereqs: ["materia26"] },
        "materia36": { name: "Ingles IV", prereqs: ["materia27"] },
        "materia37": { name: "Italiano IV", prereqs: ["materia28"] },
        "materia38": { name: "Medicina Interna II", prereqs: ["materia29"] },
        "materia39": { name: "Clínica Quirúrgica II", prereqs: ["materia30"] },
        "materia40": { name: "Pediatria", prereqs: ["materia29"] },
        "materia41": { name: "Tocoginecologia", prereqs: ["materia30"] },
        "materia42": { name: "Medicina Legal", prereqs: ["materia39"] },
        "materia43": { name: "Practica Hospitalar V", prereqs: ["materia31"] },
        "materia44": { name: "Dx por Imágenes V", prereqs: ["materia32"] },
        "materia45": { name: "Humanistica V", prereqs: ["materia33"] },
        "materia46": { name: "Cibernetica V", prereqs: ["materia34"] },
        "materia47": { name: "Cirugia Basica V", prereqs: ["materia35"] },
        "materia48": { name: "Ingles V", prereqs: ["materia36"] },
        "materia49": { name: "Italiano V", prereqs: ["materia37"] },
        "materia50": { name: "PFO", prereqs: ["materia48"] }
    };

    function verificarMateria(id) {
        let materia = materias[id];
        let puedeCursar = true;

        for (let prereq of materia.prereqs) {
            let prereqElement = document.getElementById(prereq);
            if (!prereqElement.classList.contains("aprobada")) {
                puedeCursar = false;
                break;
            }
        }

        let materiaElement = document.getElementById(id);
        if (puedeCursar) {
            materiaElement.classList.add("aprobada");
            materiaElement.classList.remove("gris");
            materiaElement.classList.add("verde");
            alert(`¡Puedes cursar ${materia.name}!`);
        } else {
            alert(`Debes aprobar las materias anteriores para cursar ${materia.name}.`);
        }
    }

    let materiaElements = document.querySelectorAll('.materia');
    materiaElements.forEach(function (element) {
        element.addEventListener('click', function () {
            verificarMateria(element.id);
        });
    });
});
