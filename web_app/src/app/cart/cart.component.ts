import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../services/booking/booking.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  form:FormGroup;
  isBooking = false;
  constructor(
    private fb:FormBuilder,
    private book:BookingService,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      'pid': [''+this.route.snapshot.params['id']],
      'name': ['',Validators.required],
      'phoneNumber': ['',Validators.required],
      'countOfPeople': ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  bookPackage(){
    this.isBooking = true;
    const data = this.form.value;
    this.book.book(data)
      .subscribe(
        res => {
          if(res.success){
            this.isBooking = false
            alert(res.message)
          }else{
            this.isBooking = false;
            alert(res.message)
          }
        },
        err => {
          this.isBooking = false;
          alert("Server error");
        }
      )
  }

}
