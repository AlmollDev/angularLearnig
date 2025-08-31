import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
      data = {
        title : '<h1>angular core deep dive</h1><script>alert("Attack")</script>'
      }
      onLogoClicked(){
      alert("HelloWelcomeTomyProject");
      }
      EventContoller(newTitle:string){
        // console.log(console.log(newTitle));

        this.data.title=newTitle;
      }

}
