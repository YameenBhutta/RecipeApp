import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverElements = [{type: 'server', name:'testServer', content:'description'}];
 

  constructor() {}

  ngOnInit(): void {}


  

}
