import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos = [{
    oferta: true,
    img: "",
    Titulo: "Mike",
    especificaciones: "Lorem ipsum dolor sit amet consor sit amet consectetur adipisicing elit. Aperiam tempore repellat vor sit amet consectetur adipisicing elit. Aperiam tempore repellat vectetur aore, sequi nisi ab, nulla odio.",
    precio: 120000
  }
  // ,{
  //   oferta: true,
  //   img: "",
  //   Titulo: "Aridas",
  //   especificaciones: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore repellat voluptas fuga ipsa optio magni! Voluptatum quia error doloremque exercitationem dolor fugiat nihil, rerum alias culpa nam quam in maiores praesentium quae quidem blanditiis. Animi mollitia aut quam eveniet atque nihil numquam laborum dolore, sequi nisi ab, nulla odio.",
  //   precio: 150000
  // },{
  //   oferta: true,
  //   img: "",
  //   Titulo: "Pume",
  //   especificaciones: "Lorem ipsum dolor sit tas fuga ipsa optio magni! Voluptatum quia error doloremque exercitationem dolor fugiat nihil, rerum alias culpa nam quam in maiores praesentium quae quidem blanditiis. Animi mollitia aut quam eveniet atque nihil numquam laborum dolore, sequi nisi ab, nulla odio.",
  //   precio: 80000
  // },{
  //   oferta: true,
  //   img: "",
  //   Titulo: "ReadBook",
  //   especificaciones: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore repellat voluptas fuga ipsa optio magni! Voluptatum quia error doloremque exercitationem dolor fugiat nihil, rerum alias culpa nam quam in maiores praesentium quae quidem blanditiis. Animi mollitia aut quam eveniet atque nihil numquam laborum dolore, sequi nisi ab, nulla odio.",
  //   precio: 160000
  // },{
  //   oferta: true,
  //   img: "",
  //   Titulo: "Tomy&jerry",
  //   especificaciones: "Lorem ipsum dolor sit amet conse fuga ipsa optio magni! Voluptatum quia error doloremque exercitationem dolor fugiat nihil, rerum alias culpa nam quam in maiores praesentium quae quidem blanditiis. Animi mollitia aut quam eveniet atque nihil numquam laborum dolore, sequi nisi ab, nulla odio.",
  //   precio: 250000
  // },{
  //   oferta: true,
  //   img: "",
  //   Titulo: "brama",
  //   especificaciones: "ore repellat voluptas fuga ipsa optio magni! Voluptatum quia error doloremque exercitationem dolor fugiat nihil, rerum alias culpa nam quam in maiores praesentium quae quidem blanditiis. Animi mollitia aut quam eveniet atque nihil numquam laborum dolore, sequi nisi ab, nulla odio.",
  //   precio: 600000
  // },
]

  constructor() { }

  ngOnInit(): void {
  }

}
