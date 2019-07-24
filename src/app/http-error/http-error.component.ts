import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-http-error',
  templateUrl: './http-error.component.html',
  styleUrls: ['./http-error.component.css']
})

export class HttpErrorComponent implements OnInit {

	public code: number = 0;
  	public message: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.data.subscribe((data) => {
  		console.log(data);
  		this.code = data.code;
  		this.message = data.message;
  	});
  }

}
