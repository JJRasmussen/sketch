const container = document.querySelector(".container");

function squareTouch(){
    const squareTouched = document.querySelector("#" + this.id);
    squareTouched.setAttribute("class", "touchedSquare");

};

function gridCreation(){
    gridSize = prompt("What is your desired grid resolution? Choose a number between 1 and 100.")
    if (gridSize > 100){
        gridSize = 100;
    };
    if (gridSize <1){
        gridSize = 1;
    };


    container.textContent= "";

    for (let i = 0; i < gridSize; i++){
    
        //creation of the row containers
        rowId = "row"+i;
    
        const createRow = document.createElement("div");
        createRow.setAttribute("class", "row");
        createRow.setAttribute("id", rowId)
        container.appendChild(createRow);
    
        for (let j = 0; j < gridSize; j++){
    
            columnId = "column"+j;
            squareId = rowId+columnId;
    
            const createSquare = document.createElement("div");
            createSquare.setAttribute("class", "square");
            createSquare.setAttribute("id", squareId);
            
            rowSelectorId = "#"+rowId;
    
            const rowForSquare = document.querySelector("#"+rowId);
            rowForSquare.appendChild(createSquare);
    
        }
    }

    const squares = document.querySelectorAll(".square");
    for (let i = 0; i < gridSize * gridSize; i++){
            squares[i].addEventListener("mouseover", squareTouch);
}

};

const gridButton = document.querySelector(".button");
gridButton.addEventListener("click", gridCreation);