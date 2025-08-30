import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,   // standalone component agar bana rahe ho
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.css']   // ❌ styleUrl nahi hota, ✅ styleUrls (array) hota hai
})
export class Header {}
