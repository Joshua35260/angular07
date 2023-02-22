import { Component, OnInit, Input } from '@angular/core';
import { Skills } from '../models/skills';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() skills: Skills = {} as Skills;

  constructor() {}

  ngOnInit() {}
}
