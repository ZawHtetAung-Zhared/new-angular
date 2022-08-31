import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  public Answers: any;
  constructor( private router: Router) { }
  
  ngOnInit(): void {
    this.Answers = JSON.parse(localStorage.getItem('answers')!)
    console.log('review', this.Answers);
 
  }
  back() {
    this.router.navigateByUrl('');

  }

}
