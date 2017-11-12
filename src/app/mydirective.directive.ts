import { Directive, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(private re:Renderer2, private el : ElementRef) {

      re.setStyle(el.nativeElement, 'background-color', 'gold');
      re.setStyle(el.nativeElement, 'color', 'white');

  }

  
}
