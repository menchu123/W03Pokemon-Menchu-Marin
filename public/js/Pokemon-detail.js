import Component from "./Component.js";

class PokeDetail extends Component {
  constructor(parentElement) {
    super(parentElement, "modal");
    this.generateHTML();
  }

  generateHTML() {
    const html = `<div class="modal">
      <div class="main-detail">
             <div class="pokemon-detail"> 
               <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/131.svg"                alt=""
                class="pokemon-detail__img"
              />
              <div class="pokemon-detail__data">
                 <div class="pokemon-detail__main">
                  <span class="pokemon-detail__number">num</span>
                  <span class="pokemon-detail__name">name</span>
              </div>
              <ul class="pokemon-detail__types">
                  <li class="pokemon-detail__type">type</li>
                  <li class="pokemon-detail__type">type</li>
              </ul>
              
            </div>
            <div class="pokemon-detail__stats">
                <table>
                  <thead>
                    <tr>
                      <th colspan="2">STATS</th>
                    </tr>
                  </thead>
                  <tbody>
                     <tr>
                      <td>HEIGHT</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>WEIGHT</td>
                      <td>2200</td>
                    </tr>
                    <tr>
                      <td>BASE XP</td>
                      <td>123</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
      </div>
      </div>`;

    this.element.innerHTML = html;
  }
}

export default PokeDetail;
