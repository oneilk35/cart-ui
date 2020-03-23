import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  ingestion : string
  message : string; 
  success : boolean;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
    this.message = this.data.message;
    this.ingestion = this.data.ingestion
    this.success = this.data.success;
    console.log(this.ingestion);
  }

}
