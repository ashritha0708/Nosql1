import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedPackagesService {

  constructor() { }

  packages = [
    {id:1, name: "Kulu Manali", price : 20000,days: "4 Days & 3 Nights", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5Mmq1z-sd1ZcCIwrzi8mkitX938HOnR0sg&usqp=CAU" },
    {id:2, name: "Pondicherry", price : 5000,days: "2 Days & 1 Night", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQRma3c8DFAAORc-QFnPsEnbOO81FuHyZfQ&usqp=CAU" },
    {id:3, name: "Goa",         price : 6000,days: "3 Days & 2 Nights", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC3BMY9dnUXHx4-26L4hECnXhFU4n9WqTRxw&usqp=CAU"},
    {id:4, name: "Maldives",    price : 40000,days: "5 Days & 4 Nights", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApGW15TLzo92fxUNXW80CBhBUfZOmqD5jsw&usqp=CAU" },
    {id:5, name: "Tirupathi",   price : 10000,days: "4 Days & 3 Nights", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEh5dYrIiZUE742S1gqUzcSYbMKIvAEFp4w&usqp=CAU" },
  ]
  
  id:number | undefined;
}
