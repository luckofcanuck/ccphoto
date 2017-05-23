import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

    images = [{
        big: "/assets/img2/tall-bw-build.png",
        small: "/assets/resized/tall-bw-build.png",
    },
    {
        big: "/assets/img2/tall-bw-fam.png",
        small: "/assets/resized/tall-bw-fam.png",
    },
    {
        big: "/assets/img2/tall-bw-g.png",
        small: "/assets/resized/tall-bw-g.png",
    },
    {
        big:"/assets/img2/tall-bw-hands.png",
        small: "/assets/resized/tall-bw-hands.png",
    },
    {
        big: "/assets/img2/tall-bw-pers.png",
        small: "/assets/resized/tall-bw-pers.png",
    },
    {
        big: "/assets/img2/tall-bw-seated.png",
        small: "/assets/resized/tall-bw-seated.png",
    },
    {
        big: "/assets/img2/tall-bw-sky.png",
        small: "/assets/resized/tall-bw-sky.png",
    },
    {
        big: "/assets/img2/tall-bw-stand.png",
        small: "/assets/resized/tall-bw-stand.png",
    },
    {
        big: "/assets/img2/tall-c-amy.png",
        small: "/assets/resized/tall-c-amy.png",
    },
    {
        big: "/assets/img2/tall-c-barn.png",
        small: "/assets/resized/tall-c-barn.png",
    },
    {
        big: "/assets/img2/tall-c-bean.png",
        small: "/assets/resized/tall-c-bean.png",
    },
    {
        big: "/assets/img2/tall-c-bean2.png",
        small: "/assets/resized/tall-c-bean2.png",
    },
    {
        big: "/assets/img2/tall-c-dance.png",
        small: "/assets/resized/tall-c-dance.png",
    },
    {
        big: "/assets/img2/tall-c-famstairs.png",
        small: "/assets/resized/tall-c-famstairs.png",
    },
    {
        big: "/assets/img2/tall-c-flirt.png",
        small: "/assets/resized/tall-c-flirt.png",
    },
    {
        big: "/assets/img2/tall-c-girl.png",
        small: "/assets/resized/tall-c-girl.png",
    },
    {
        big: "/assets/img2/tall-c-girlstairs.png",
        small: "/assets/resized/tall-c-girlstairs.png",
    },
    {
        big: "/assets/img2/tall-c-hair.png",
        small: "/assets/resized/tall-c-hair.png",
    },
    {
        big: "/assets/img2/tall-c-hug.png",
        small: "/assets/resized/tall-c-hug.png",
    },
    {
        big: "/assets/img2/tall-c-kiss.png",
        small: "/assets/resized/tall-c-kiss.png",
    },
    {
        big: "/assets/img2/tall-c-mwah.png",
        small: "/assets/resized/tall-c-mwah.png",
    },
    {
        big: "/assets/img2/tall-c-outside.png",
        small: "/assets/resized/tall-c-outside.png",
    },
    {
        big: "/assets/img2/tall-c-purpstairs.png",
        small: "/assets/resized/tall-c-purpstairs.png",
    },
    {
        big: "/assets/img2/tall-c-reach.png",
        small: "/assets/resized/tall-c-reach.png",
    },
    {
        big: "/assets/img2/tall-c-stat.png",
        small: "/assets/resized/tall-c-stat.png",
    },
    {
        big: "/assets/img2/tall-c-throw.png",
        small: "/assets/resized/tall-c-throw.png",
    },
    {
        big: "/assets/img2/tall-c-tot.png",
        small: "/assets/resized/tall-c-tot.png",
    },
    {
        big: "/assets/img2/tall-c-youth.png",
        small: "/assets/resized/tall-c-youth.png",
    },
    {
        big: "/assets/img2/wide-bw-ames.png",
        small: "/assets/resized/wide-bw-ames.png",
    },
    {
        big: "/assets/img2/wide-bw-amy.png",
        small: "/assets/resized/wide-bw-amy.png",
    },
    {
        big: "/assets/img2/wide-bw-az.png",
        small: "/assets/resized/wide-bw-az.png",
    },
    {
        big: "/assets/img2/wide-bw-baby.png",
        small: "/assets/resized/wide-bw-baby.png",
    },
    {
        big: "/assets/img2/wide-bw-bean.png",
        small: "/assets/resized/wide-bw-bean.png",
    },
    {
        big: "/assets/img2/wide-bw-bed.png",
        small: "/assets/resized/wide-bw-bed.png",
    },
    {
        big: "/assets/img2/wide-bw-blonde.png",
        small: "/assets/resized/wide-bw-blonde.png",
    },
    {
        big: "/assets/img2/wide-bw-blonde2.png",
        small: "/assets/resized/wide-bw-blonde2.png",
    },
    {
        big: "/assets/img2/wide-bw-blonde3.png",
        small: "/assets/resized/wide-bw-blonde3.png",
    },
    {
        big: "/assets/img2/wide-bw-blonde4.png",
        small: "/assets/resized/wide-bw-blonde4.png",
    },
    {
        big: "/assets/img2/wide-bw-blondie.png",
        small: "/assets/resized/wide-bw-blondie.png",
    },
    {
        big: "/assets/img2/wide-bw-dis.png",
        small: '/assets/resized/wide-bw-dis.png',
    },
    {
        big: "/assets/img2/wide-bw-flow.png",
        small: "/assets/resized/wide-bw-flow.png",
    },
    {
        big: "/assets/img2/wide-bw-freud.png",
        small: "/assets/resized/wide-bw-freud.png",
    },
    {
        big: "/assets/img2/wide-bw-jump.png",
        small: "/assets/resized/wide-bw-jump.png",
    },
    {
        big: "/assets/img2/wide-bw-kiddo.png",
        small: "/assets/resized/wide-bw-kiddo.png",
    },
    {
        big: "/assets/img2/wide-bw-lady.png",
        small: "/assets/resized/wide-bw-lady.png",
    },
    {
        big: "/assets/img2/wide-bw-land.png",
        small: "/assets/resized/wide-bw-land.png",
    },
    {
        big: "/assets/img2/wide-bw-lens.png",
        small: "/assets/resized/wide-bw-lens.png",
    },
    {
        big: "/assets/img2/wide-bw-look.png",
        small: "/assets/resized/wide-bw-look.png",
    },
    {
        big: "/assets/img2/wide-bw-luc.png",
        small: "/assets/resized/wide-bw-luc.png",
    },
    {
        big: "/assets/img2/wide-bw-lucpool.png",
        small: "/assets/resized/wide-bw-lucpool.png",
    },
    {
        big: "/assets/img2/wide-bw-lucsmile.png",
        small: "/assets/resized/wide-bw-lucsmile.png",
    },
    {
        big: "/assets/img2/wide-bw-macro.png",
        small: "/assets/resized/wide-bw-macro.png",
    },
    {
        big: "/assets/img2/wide-bw-mom.png",
        small: "/assets/resized/wide-bw-mom.png",
    },
    {
        big: "/assets/img2/wide-bw-mom.png",
        small: "/assets/resized/wide-bw-ohgoodnessme.png",
    },
    {
        big: "/assets/img2/wide-bw-onlyflow.png",
        small: "/assets/resized/wide-bw-onlyflow.png",
    },
    {
        big: "/assets/img2/wide-bw-pool.png",
        small: "/assets/resized/wide-bw-pool.png",
    },
    {
        big: "/assets/img2/wide-bw-port.png",
        small: "/assets/resized/wide-bw-port.png",
    },
    {
        big: "/assets/img2/wide-bw-shorts.png",
        small: "/assets/resized/wide-bw-shorts.png",
    },
    {
        big: "/assets/img2/wide-bw-shot.png",
        small: "/assets/resized/wide-bw-shot.png",
    },
    {
        big: "/assets/img2/wide-bw-snug.png",
        small: "/assets/resized/wide-bw-snug.png",
    },
    {
        big: "/assets/img2/wide-bw-sub.png",
        small: "/assets/resized/wide-bw-sub.png",
    },
    {
        big: "/assets/img2/wide-bw-wind.png",
        small: "/assets/resized/wide-bw-wind.png",
    },
    {
        big: "/assets/img2/wide-c-amy.png",
        small: "/assets/resized/wide-c-amy.png",
    },
    {
        big: "/assets/img2/wide-c-amy2.png",
        small: "/assets/resized/wide-c-amy2.png",
    },
    {
        big: "/assets/img2/wide-c-amy3.png",
        small: "/assets/resized/wide-c-amy3.png",
    },
    {
        big: "/assets/img2/wide-c-amy4.png",
        small: "/assets/resized/wide-c-amy4.png",
    },
    {
        big: "/assets/img2/wide-c-amy5.png",
        small: "/assets/resized/wide-c-amy5.png",
    },
    {
        big: "/assets/img2/wide-c-bedpost.png",
        small: "/assets/resized/wide-c-bedpost.png",
    },
    {
        big: "/assets/img2/wide-c-blonde.png",
        small: "/assets/resized/wide-c-blonde.png",
    },
    {
        big: "/assets/img2/wide-c-boy.png",
        small: "/assets/resized/wide-c-boy.png",
    },
    {
        big: "/assets/img2/wide-c-cam.png",
        small: "/assets/resized/wide-c-cam.png",
    },
    {
        big: "/assets/img2/wide-c-class.png",
        small: "/assets/resized/wide-c-class.png",
    },
    {
        big: "/assets/img2/wide-c-delray.png",
        small: "/assets/resized/wide-c-delray.png",
    },
    {
        big: "/assets/img2/wide-c-famstairs.png",
        small: "/assets/resized/wide-c-famstairs.png",
    },
    {
        big: "/assets/img2/wide-c-ground.png",
        small: "/assets/resized/wide-c-ground.png",
    },
    {
        big: "/assets/img2/wide-c-hair.png",
        small: "/assets/resized/wide-c-hair.png",
    },
    {
        big: "/assets/img2/wide-c-kid.png",
        small: "/assets/resized/wide-c-kid.png",
    },
    {
        big: "/assets/img2/wide-c-lady.png",
        small: "/assets/resized/wide-c-lady.png",
    },
    {
        big: "/assets/img2/wide-c-landscape.png",
        small: "/assets/resized/wide-c-landscape.png",
    },
    {
        big: "/assets/img2/wide-c-lean.png",
        small: "/assets/resized/wide-c-lean.png",
    },
    {
        big: "/assets/img2/wide-c-peanut.png",
        small: "/assets/resized/wide-c-peanut.png",
    },
    {
        big: "/assets/img2/wide-c-play.png",
        small: "/assets/resized/wide-c-play.png",
    },
    {
        big: "/assets/img2/wide-c-pool.png",
        small: "/assets/resized/wide-c-pool.png"
    }
    ]


  constructor() { }



  ngOnInit() {
  }

}
