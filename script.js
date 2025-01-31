class Creature {
    constructor(species, name, size, location, image) {
      this.species = species;
      this.name = name;
      this.size = size;
      this.location = location;
      this.image = image;
    }
  }
  
  class CreatureTable {
    constructor(title, creatures) {
      this.title = title;
      this.creatures = creatures;
    }
  
    renderTableContent() {
      let container = document.getElementById("table");
      let tableContent = `<h2>Table : ${this.title}</h2><div class="parent" id="table-${this.title}">`;
  
      this.creatures.forEach((creature, index) => {
        tableContent += `
          <div class="creature" id="creature-${index}">
              <h3>Species: ${creature.species}</h3>
              <h3 class="${
                this.title === "Big Cats"
                  ? ""
                  : this.title === "Big Fish"
                  ? "italic-blue"
                  : "bold"
              }">Name: ${creature.name}</h3>
              <h3>Size: ${creature.size}</h3>
              <h3>Location: ${creature.location}</h3>
              <img src="${creature.image}" alt="${creature.name}">
              <div class="creature-actions">
                  <button onclick="modifyCreature(${index}, '${
          this.title
        }')">Modify</button>
                  <button onclick="removeCreature(${index}, '${
          this.title
        }')">Remove</button>
              </div>
          </div>
        `;
      });
  
      tableContent += `</div>`;
      container.innerHTML += tableContent;
    }
  
    updateTableContent() {
      const tableDiv = document.getElementById(`table-${this.title}`);
      let tableContent = "";
      this.creatures.forEach((creature, index) => {
        tableContent += `
          <div class="creature" id="creature-${index}">
              <h3>Species: ${creature.species}</h3>
              <h3 class="${
                this.title === "Big Cats"
                  ? ""
                  : this.title === "Dog"
                  ? "bold"
                  : "italic-blue"
              }">Name: ${creature.name}</h3>
              <h3>Size: ${creature.size}</h3>
              <h3>Location: ${creature.location}</h3>
              <img src="${creature.image}" alt="${creature.name}">
              <div class="creature-actions">
                  <button onclick="modifyCreature(${index}, '${
          this.title
        }')">Modify</button>
                  <button onclick="removeCreature(${index}, '${
          this.title
        }')">Remove</button>
              </div>
          </div>
        `;
      });
      tableDiv.innerHTML = tableContent;
    }
  }
  
  let bigCatsList = [
    new Creature(
      "Big Cats",
      "Tiger",
      10,
      "Asia",
      "https://example.com/tiger.jpg"
    ),
    new Creature(
      "Big Cats",
      "Lion",
      8,
      "Africa",
      "https://example.com/lion.jpg"
    ),
    new Creature(
      "Big Cats",
      "Leopard",
      5,
      "Africa and Asia",
      "https://example.com/leopard.jpg"
    ),
  ];
  
  let dogsList = [
    new Creature(
      "Dog",
      "Rottweiler",
      2,
      "Germany",
      "https://example.com/rottweiler.jpg"
    ),
    new Creature(
      "Dog",
      "German Shepherd",
      2,
      "Germany",
      "https://example.com/german-shepherd.jpg"
    ),
  ];
  
  let bigFishList = [
    new Creature(
      "Big Fish",
      "Humpback Whale",
      "15",
      "Atlantic Ocean",
      "https://example.com/humpback-whale.jpg"
    ),
    new Creature(
      "Big Fish",
      "Killer Whale",
      "12",
      "Atlantic Ocean",
      "https://example.com/killer-whale.jpg"
    ),
  ];
  
  let bigCatsTable = new CreatureTable("Big Cats", bigCatsList);
  let dogsTable = new CreatureTable("Dogs", dogsList);
  let bigFishTable = new CreatureTable("Big Fish", bigFishList);
  
  bigCatsTable.renderTableContent();
  dogsTable.renderTableContent();
  bigFishTable.renderTableContent();
  
  
  function removeCreature(index, tableTitle) {
    let table =
      tableTitle === "Big Cats" ? bigCatsList : tableTitle === "Dog" ? dogsList : bigFishList;
    table.splice(index, 1);
  
    if (tableTitle === "Big Cats") {
      bigCatsTable.updateTableContent();
    } else if (tableTitle === "Dog") {
      dogsTable.updateTableContent();
    } else {
      bigFishTable.updateTableContent();
    }
  }
  
  function modifyCreature(index, tableTitle) {
    let table =
      tableTitle === "Big Cats" ? bigCatsList : tableTitle === "Dog" ? dogsList : bigFishList;
    let creature = table[index];
    document.getElementById("species").value = creature.species;
    document.getElementById("name").value = creature.name;
    document.getElementById("size").value = creature.size;
    document.getElementById("location").value = creature.location;
    document.getElementById("image").value = creature.image;
  
    document.getElementById("edit-content").onsubmit = function (event) {
      event.preventDefault();
      creature.species = document.getElementById("species").value;
      creature.name = document.getElementById("name").value;
      creature.size = document.getElementById("size").value;
      creature.location = document.getElementById("location").value;
      creature.image = document.getElementById("image").value;

      if (tableTitle === "Big Cats") {
        bigCatsTable.updateTableContent();
      } else if (tableTitle === "Dog") {
        dogsTable.updateTableContent();
      } else {
        bigFishTable.updateTableContent();
      }
  
      document.getElementById("edit-content").reset();
    };
  }