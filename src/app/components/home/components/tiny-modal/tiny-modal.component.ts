import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-tiny-modal',
  templateUrl: './tiny-modal.component.html',
  styleUrls: ['./tiny-modal.component.css']
})
export class TinyModalComponent implements OnInit {
  public count: any = [0];
  public mcq: any = []
  public required: boolean = false;
  public ownAnswer: boolean = false;
  public form = this.fb.group({
    Qname: this.fb.control('', [Validators.required]),
});
  @Output() submitBtn = new EventEmitter<any>();


  constructor( private fb: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  addMoreAns() {
    this.count = [...this.count, this.count.length]
    console.log(this.count);
  }
  submit(event: any) {
    event.preventDefault();
    console.log(this.ownAnswer, this.required, this.form.get('Qname')?.value, this.mcq);
    const body = {
      ownAnswer: this.ownAnswer,
      required: this.required,
      mcq: this.mcq,
      qname: this.form.get('Qname')?.value
    }
    this.submitBtn.emit(body);
  }

}
