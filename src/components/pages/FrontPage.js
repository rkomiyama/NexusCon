import React from 'react';
import Media from 'react-media';
import Header from '../Header';
import NavBar from '../NavBar';
import NavBurger from '../NavBurger';

const FrontPage = () => (
  <div className="frontPage">
    <Header />
    <Media query="(max-width: 550px)">
      {(matches) => matches ? <NavBurger /> : <NavBar />}
    </Media>
    <section id="main-content" className="frontPage-content container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in pharetra massa, vitae lacinia quam. In tempor tempus quam. Donec in tempor magna. Fusce tempor tempus efficitur. Nullam commodo mauris turpis, a mollis ligula vulputate quis. Nunc sit amet erat at metus accumsan faucibus. Fusce ac convallis tellus, non fringilla tellus. Integer eleifend dolor in justo ornare aliquam. Mauris turpis magna, porttitor vitae lacinia nec, lacinia eget quam.
      </p>
      <p>
        Suspendisse sit amet sem aliquam, lobortis sem vel, dapibus lectus. Suspendisse porta congue ornare. Mauris pharetra nec metus ut luctus. Suspendisse pretium eleifend arcu eget mollis. Integer vulputate elementum semper. Praesent et fermentum lacus. Nunc imperdiet gravida erat, at facilisis turpis. Suspendisse consectetur nibh nec volutpat ullamcorper. Nulla sed leo at elit condimentum porta non ac felis. Proin auctor placerat nibh, vitae volutpat mauris consequat ac. Curabitur sit amet odio a nisi dictum tempus vitae non ex. Etiam iaculis quis sem a varius.
      </p>
      <p>
        Duis non mauris eu augue lobortis porta. Aliquam nec lectus sed eros ultrices congue. Aliquam porta dapibus nunc congue congue. Praesent facilisis pretium orci, vel semper dui. Sed convallis, leo eu blandit pharetra, leo lorem tempor diam, sit amet eleifend nunc sem in dolor. Maecenas ultricies felis et tortor viverra, sed facilisis turpis placerat. Nunc aliquet accumsan elementum. Proin fermentum, dolor id mattis congue, ipsum nisl molestie augue, ut rhoncus purus eros vitae sem. Mauris consequat consequat suscipit. Donec aliquam rhoncus condimentum. Sed consequat purus sed libero hendrerit hendrerit. Sed neque velit, commodo sit amet imperdiet accumsan, accumsan consectetur neque.
      </p>
      <p>
        Mauris elementum, nulla vitae congue vehicula, arcu est maximus elit, eu egestas nisi lacus sed augue. Ut varius, elit at vehicula sagittis, libero sapien feugiat lacus, vel mollis dolor libero a velit. Praesent vehicula nunc sed dolor pharetra, luctus placerat nunc iaculis. In hac habitasse platea dictumst. Donec fermentum lacus tellus, varius gravida eros viverra id. Cras id velit sit amet leo bibendum tempor eget eu neque. Morbi tincidunt dapibus justo, sit amet viverra eros efficitur at. Praesent eleifend sed orci nec dictum. Vivamus dolor libero, semper sit amet feugiat nec, dignissim id nibh. Donec quis magna vestibulum, rhoncus nunc ac, molestie ipsum. Vestibulum non massa tellus. Proin urna lacus, molestie sed ex at, imperdiet malesuada quam. Cras eget mi et purus mattis congue a a ipsum.
      </p>
      <p>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque viverra nibh sed egestas dignissim. Nulla porta mi sed lectus viverra auctor. Quisque non purus turpis. Suspendisse malesuada diam ut nisl consequat, ornare vulputate metus mattis. Aliquam erat volutpat. Nam et porttitor nunc, sit amet aliquam elit. Phasellus facilisis mauris leo, a molestie sem tristique ut. Maecenas ornare, enim sit amet pretium cursus, lectus ipsum interdum ante, et convallis augue tellus in tellus. Cras fringilla ligula et nunc eleifend, at vulputate nisl consectetur. Cras imperdiet semper faucibus. In hac habitasse platea dictumst. Vestibulum lectus leo, malesuada ut ornare in, dignissim quis nisi. Quisque sagittis leo risus. Nunc varius pharetra nisi, eu placerat lacus vehicula molestie. Suspendisse potenti.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in pharetra massa, vitae lacinia quam. In tempor tempus quam. Donec in tempor magna. Fusce tempor tempus efficitur. Nullam commodo mauris turpis, a mollis ligula vulputate quis. Nunc sit amet erat at metus accumsan faucibus. Fusce ac convallis tellus, non fringilla tellus. Integer eleifend dolor in justo ornare aliquam. Mauris turpis magna, porttitor vitae lacinia nec, lacinia eget quam.
      </p>
    </section>
  </div>
);

export default FrontPage;
