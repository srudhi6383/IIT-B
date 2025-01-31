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
        let container = document.getElementById("animal-table");
        let tableContent = `<h2>Table : ${this.title}</h2><div class="parent" id="table-${this.title}">`;

        this.creatures.forEach((creature, index) => {
            let nameClass = "";
            if (this.title === "Dogs") {
                nameClass = "bold"; 
            } else if (this.title === "Big Fish") {
                nameClass = "blue-text"; 
            }

            tableContent += `
            <div class="creature" id="creature-${index}">
                <h3>Species: ${creature.species}</h3>
                <h3 class="${nameClass}">Name: ${creature.name}</h3>
                <h3>Size: ${creature.size} ft</h3>
                <h3>Location: ${creature.location}</h3>
                <img src="${creature.image}" alt="${creature.name}">
                <div class="creature-actions">
                    <button onclick="modifyCreature(${index}, '${this.title}')">Modify</button>
                    <button onclick="removeCreature(${index}, '${this.title}')">Remove</button>
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
            let nameClass = "";
            if (this.title === "Dogs") {
                nameClass = "bold";
            } else if (this.title === "Big Fish") {
                nameClass = "blue-text";
            }

            tableContent += `
            <div class="creature" id="creature-${index}">
                <h3>Species: ${creature.species}</h3>
                <h3 class="${nameClass}">Name: ${creature.name}</h3>
                <h3>Size: ${creature.size} ft</h3>
                <h3>Location: ${creature.location}</h3>
                <img src="${creature.image}" alt="${creature.name}">
                <div class="creature-actions">
                    <button onclick="modifyCreature(${index}, '${this.title}')">Modify</button>
                    <button onclick="removeCreature(${index}, '${this.title}')">Remove</button>
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
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf53OPjAvH2Mer3iYwhdBq9h72lpLks5-6EwLWqoRc9jwrVhzmHqpfnVEF9t_zxxmnzQTbpOaUcMvvxQFPllPvxxU7Q4s-73d3NDETehE0WTKOPIXJdqzrMLq3hYMKnaRk7JCypmg?key=diMK_80ckKTiDYYhCkLD1Q"
    ),
    new Creature(
      "Big Cats",
      "Lion",
      8,
      "Africa",
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd3YWTE9qsM8ixtWVa4XL_e79XTR2uTNPxMidJo6NjR_h3dJASy0iSLUZUIddQeEBsNSBNWdW_whoHv6pMNdGL-ap_Xr7w6o_ilDr9CbOE2lX6el124Cckde2_ZxGCKVWS8wN2y5g?key=diMK_80ckKTiDYYhCkLD1Q"
    ),
    new Creature(
      "Big Cats",
      "Leopard",
      5,
      "Africa and Asia",
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfRlYhPYUadXdjE8ghce8hz1MA-dJcN3kkWMvL5uK4EngylRs90X7OYDVinCTXhuuHdFwOHOjyP2x4x8C8VCNZIJTiyP0bEfhSlVJvRxyazt4EdiimrV7fbk8vT1wxe4lylQkqJ?key=diMK_80ckKTiDYYhCkLD1Q"
    ),
    new Creature(
        "Big Cats",
        "Cheetah",
        5,
        "Africa",
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfE-rb4NkM4eTg_IIyagP_ENKBuosxLmnNmAMBRIs4J6srH3iJuAXh3DYSFRytRgabtpIA6dBn_QrAmx2-skjb3izzbl7vtJdxEHHYm3WXXPML_lkpt8YR0YntZfloxmzQEWJhQog?key=diMK_80ckKTiDYYhCkLD1Q"
      ),
      new Creature(
        "Big Cats",
        "Caracal",
        3,
        "Africa",
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeTXOE30Mn8ROlQRLa50n_ffHMJh-_O1nrz4ez_fL4Kf4nJRvSSFMC6rTVIjcHoYFKRP9L7rAfpQcn_Zr-rc8KrtVR0N6JEIlXaY88IZXbez7b0a0t91Q4r-ZB6ISdPBbNWOtgZDg?key=diMK_80ckKTiDYYhCkLD1Q"
      ),
      new Creature(
        "Big Cats",
        "Jaguar",
        5,
        "Amazon",
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXel0iw4J3wecscMIzU0FIwQraepRGHpr8px7qBrGq9yv2AGNR3szU92dU5WM-wFDQ64z6Ul1bi3uLDyuVfMT6BMtL0qchwFoH1_xCD0VxbDJH13ettkhAjMDAwVvKHUCsOGgWOw4Q?key=diMK_80ckKTiDYYhCkLD1Q"
      ),
  ];
  
  let dogsList = [
    new Creature(
        "Dog",
        "Rottweiler",
        2,
        "Germany",
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXddsWqJ9xao46kXmGAT1zDDzemlcGqondWCaRASmoWHAXQUeFau7e-xPUkbDtCH_QOrIzEm424Cv71Vv7S_tGqLVpLqnEPLyu9PFlcWkiCeaMgldfDsavM7S4TQckUftVtzQCUY?key=diMK_80ckKTiDYYhCkLD1Q"
      ),
      new Creature(
        "Dog",
        "German Shepherd",
        2,
        "Germany",
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfZ07-E6cNLRLMNZCPLXIfG4Ys7B9BDzaegwfbQeOVq_6OrpyzwxGZU48QNJnEVp0xmpYUz1CXj5EAe5dhfjDleeYGSsLBD2qf2bJlAhNMki4Uo4Z-GosAKL4SMNAX4fzz0Wv52pA?key=diMK_80ckKTiDYYhCkLD1Q"
      ),
      new Creature(
        "Dog",
        "Labrador",
        2,
        "UK",
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXc0a9bop6u__ec0TX8tGERkMDef7Hv3j_ow3aKysKj8ooxeMiPGmSSjEgEWMwkmEt4faQcRWeGcVivFWgZChQsnA-6qe4J701ZLawtl7iVzaidEzjM_0SAlwwWt6bRSqbS3ufo7sw?key=diMK_80ckKTiDYYhCkLD1Q"
      ),
      new Creature(
        "Dog",
        "Alabai",
        4,
        "Turkey",
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf_aw46qieg7pAxf5nEY2NUaXwim7uutOpQQAaxtuqvcvBKyOxpfEVALKHTbn27jnqwfZ53RpglPKUR6NNvvI7_2IZ6lj1PGegsPrDxH2sYDs-qzQFrl2j74c0QuLjF39Qhhap26A?key=diMK_80ckKTiDYYhCkLD1Q"
      ),
  ];
  
  let bigFishList = [
    new Creature(
        "Big Fish",
        "Humpback Whale",
        "15",
        "Atlantic Ocean",
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeyysrrkfUWIf1lK10UBdJb7fjcJJWI9tBxkSrQu4GyVAJrGtGEfC2hjuFEcKivtWtb4-d5f4Se0qmiiaVavBY-Mugh1FbDbOzOjUS_k_fYCwcvHuXHvsk6yLwiUwTsKQRDImJplg?key=diMK_80ckKTiDYYhCkLD1Q"
      ),
      new Creature(
        "Big Fish",
        "Killer Whale",
        "12",
        "Atlantic Ocean",
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfpKxeUzFoNF8Eow2uB0PYW1GrB4lFgF8-Tyf8klQnSr32VrHVEF19O_HDliR__Yxxz-2Ak2vSTQ2955EHTAaVgz7Ekaecw4Ll-H-Tef4X_9CRohFN4uYDrDLkagsP9oMpVe5yC?key=diMK_80ckKTiDYYhCkLD1Q"
      ),
      new Creature(
        "Big Fish",
        "Tiger Shark",
        "8",
        "Ocean",
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd6sLSi4k7GHTmNtfv_rfZl0L0jofbiVodtATufVdCMUlODDU27KwiyP7WKCmLRyymg4UHs0SqPAGMSGr6jkROXspkuHM1KnCV673RwbV-Vc0Le-m2QQ0O9S8OOaITw8QXq1vWr?key=diMK_80ckKTiDYYhCkLD1Q"
      ),
      new Creature(
        "Big Fish",
        "Hammerhead Shark",
        "8",
        "Ocean",
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcdbv_YnQneKgI-vKiFYVWN_yU4gD6XUjrjRCZhve2dH6Ama0kbCYHvpt2XQd7TuD7a8kDtFjrjCJbSLGvlj7rqpRRfVMQElCqrD3ldLGy7n8c1S1mowufVRBY7j9nScBNo_4QG?key=diMK_80ckKTiDYYhCkLD1Q"
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
  