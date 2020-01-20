import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cooking-step",
  templateUrl: "./cooking-step.component.html",
  styleUrls: ["./cooking-step.component.scss"]
})
export class CookingStepComponent implements OnInit {
  @Input() stepNumber: number;
  @Input() image: string;
  @Input() description: string;

  constructor() {}

  ngOnInit() {}
}
