import { Component, OnInit } from '@angular/core';
import { Trainee } from './trainee';

@Component({
  selector: 'app-training-batch',
  templateUrl: './training-batch.component.html',
  styleUrls: ['./training-batch.component.css']
})
export class TrainingBatchComponent implements OnInit {

  currentTrainees: Trainee[] = [
    new Trainee(0 , 'Tra1'),
    new Trainee(1 , 'Tra2'),
    new Trainee(2 , 'Tra3'),
    new Trainee(3 , 'Tra4')
  ];
  counter_tra: number = this.currentTrainees.length;

  batches: Array<object> = [
    {id: 0 , batchName: 'Batch0' , datails: this.currentTrainees},
    {id: 1 , batchName: 'Batch1' , datails: this.currentTrainees}
  ];

  constructor() { }

  ngOnInit() {
  }

}
