import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public modalOpen: boolean = false;
  public disable: boolean = true;
  constructor(        private router: Router,
    ) { }

  ngOnInit(): void {
  }

  openTinyModal() {
    this.modalOpen = !this.modalOpen;
  }
  public questions: any = [];
  submitClicked(object: any) {
    console.log('submited is', object);
    this.modalOpen = false;
    this.questions = [...this.questions, object];
  }
  public answers: any = [];
  acceptAns(object: any, question: any) {
    this.answers.push({
      question: question.qname,
      answers: object,
      required: question.required
    })
    this.disable = false;
    // this.test();
    // console.log('answering', object, question.qname);
  }
  gotoReview() {
    // console.log('question', this.questions);
    console.log('answer', this.answers);
    const key = 'question';

    const arrayUniqueByKey: any = [...new Map(this.answers.map((item: any) =>
      [item[key], item])).values()];
    console.log('unique', arrayUniqueByKey);
    localStorage.setItem('answers', JSON.stringify(arrayUniqueByKey));
    this.router.navigateByUrl('form/answers');
  }
  test() {
    const key = 'question';

    const arrayUniqueByKey: any = [...new Map(this.answers.map((item: any) =>
      [item[key], item])).values()];
    console.log('unique', arrayUniqueByKey);
    for(var i =0 ;i<arrayUniqueByKey.length; i++) {
      if(arrayUniqueByKey[i].required) {
        if(arrayUniqueByKey[i].longAns != '' || arrayUniqueByKey[i].qAns.name.length != 0){
          this.disable = false;
        }
      }
    }
  }
}
