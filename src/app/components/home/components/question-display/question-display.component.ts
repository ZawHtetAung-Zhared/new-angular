import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.css']
})
export class QuestionDisplayComponent implements OnInit {
  @Input() question: any;
  @Output() outputAns = new EventEmitter<any>();

  public longAns : any = '';
  public qAns: any = [];

  constructor() { }

  ngOnInit(): void {
    console.log('got here init', this.question);
    
  }
  ngOnChanges(): void {
    console.log('got here changes', this.question);
  }
  onAreaChange(e: any) {
    console.log(e);
    this.longAns = e;
    console.log('area', this.longAns);

    this.emitFunc();
  }
  onCbChange(e: any) {
    console.log(e);
    this.emitFunc();
  }

  emitFunc() {    
    let body = {
      longAns: this.longAns,
      qAns: {
        value: this.qAns,
        name: this.question.mcq
      }
    }
    this.outputAns.emit(body);
  }
}
