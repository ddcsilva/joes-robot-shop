import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: IProduct[];
  filter: string = '';

  constructor() {
    this.products = [
      {
        id: 1,
        description:
          'Cabeça de robô com um olho grande e pescoço telescópico — excelente para alcançar lugares altos.',
        name: 'Ciclopes Grande',
        imageName: 'head-big-eye.png',
        category: 'Cabeças',
        price: 1220.5,
        discount: 0.2,
      },
      {
        id: 17,
        description: 'Base com mola — ideal para alcançar lugares elevados.',
        name: 'Base com Mola',
        imageName: 'base-spring.png',
        category: 'Bases',
        price: 1190.5,
        discount: 0,
      },
      {
        id: 6,
        description:
          'Braço articulado com garra — ótimo para alcançar cantos ou trabalhar em espaços apertados.',
        name: 'Braço Articulado',
        imageName: 'arm-articulated-claw.png',
        category: 'Braços',
        price: 275,
        discount: 0,
      },
      {
        id: 2,
        description:
          'Cabeça amigável com dois olhos e um sorriso — perfeita para uso doméstico.',
        name: 'Robô Amigável',
        imageName: 'head-friendly.png',
        category: 'Cabeças',
        price: 945.0,
        discount: 0.2,
      },
      {
        id: 3,
        description:
          'Cabeça grande com três olhos e uma trituradora na boca — ideal para triturar metais leves ou documentos.',
        name: 'Triturador',
        imageName: 'head-shredder.png',
        category: 'Cabeças',
        price: 1275.5,
        discount: 0,
      },
      {
        id: 16,
        description:
          'Base com uma roda e acelerômetro — mais rápida e capaz de enfrentar terrenos irregulares.',
        name: 'Base de Uma Roda',
        imageName: 'base-single-wheel.png',
        category: 'Bases',
        price: 1190.5,
        discount: 0.1,
      },
      {
        id: 13,
        description:
          'Tronco simples com um compartimento para carregar objetos.',
        name: 'Tronco com Bolsa',
        imageName: 'torso-pouch.png',
        category: 'Troncos',
        price: 785,
        discount: 0,
      },
      {
        id: 7,
        description:
          'Braço com duas garras independentes — ideal quando você precisa de uma mão extra. Precisa de quatro? Use dois!',
        name: 'Braço com Duas Garras',
        imageName: 'arm-dual-claw.png',
        category: 'Braços',
        price: 285,
        discount: 0,
      },
      {
        id: 4,
        description: 'Cabeça simples com um olho só — básica e econômica.',
        name: 'Ciclopes Pequeno',
        imageName: 'head-single-eye.png',
        category: 'Cabeças',
        price: 750.0,
        discount: 0,
      },
      {
        id: 9,
        description: 'Braço com hélice — útil para propulsão ou ventilação.',
        name: 'Braço com Hélice',
        imageName: 'arm-propeller.png',
        category: 'Braços',
        price: 230,
        discount: 0.1,
      },
      {
        id: 15,
        description:
          'Base com propulsão a foguete — velocidade alta e voo controlado.',
        name: 'Base Foguete',
        imageName: 'base-rocket.png',
        category: 'Bases',
        price: 1520.5,
        discount: 0,
      },
      {
        id: 10,
        description: 'Braço curto com garra — simples, mas bem em conta.',
        name: 'Braço Curtinho',
        imageName: 'arm-stubby-claw.png',
        category: 'Braços',
        price: 125,
        discount: 0,
      },
      {
        id: 11,
        description:
          'Tronco com leve flexão na cintura e medidor de temperatura embutido.',
        name: 'Tronco Flexível com Medidor',
        imageName: 'torso-flexible-gauged.png',
        category: 'Troncos',
        price: 1575,
        discount: 0,
      },
      {
        id: 14,
        description:
          'Base com duas rodas e acelerômetro para maior estabilidade.',
        name: 'Base com Duas Rodas',
        imageName: 'base-double-wheel.png',
        category: 'Bases',
        price: 895,
        discount: 0,
      },
      {
        id: 5,
        description:
          'Cabeça com três olhos oscilantes — excelente para vigilância.',
        name: 'Vigilância',
        imageName: 'head-surveillance.png',
        category: 'Cabeças',
        price: 1255.5,
        discount: 0,
      },
      {
        id: 8,
        description: 'Braço telescópico com pinça.',
        name: 'Braço com Pinça',
        imageName: 'arm-grabber.png',
        category: 'Braços',
        price: 205.5,
        discount: 0,
      },
      {
        id: 12,
        description: 'Tronco menos flexível com indicador de carga da bateria.',
        name: 'Tronco com Medidor',
        imageName: 'torso-gauged.png',
        category: 'Troncos',
        price: 1385,
        discount: 0,
      },
      {
        id: 18,
        description:
          'Base econômica com três rodas — só funciona em superfícies lisas e com velocidade reduzida.',
        name: 'Base com Três Rodas',
        imageName: 'base-triple-wheel.png',
        category: 'Bases',
        price: 700.5,
        discount: 0,
      },
    ];
  }

  getImageUrl(product: IProduct) {
    if (!product) return '';
    return `assets/images/robot-parts/${product.imageName}`;
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter((product) => product.category === this.filter);
  }
}
