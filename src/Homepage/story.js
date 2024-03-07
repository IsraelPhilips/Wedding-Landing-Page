import Mar from '../images/married.jpg';
import Mar2 from '../images/married2.jpg';
import Mar3 from '../images/married3.jpg';

import O from '../images/1.jpg';
import T from '../images/2.jpg';
import Th from '../images/3.jpg';
import F from '../images/4.jpg';
import Fi from '../images/5.jpg';
import S from '../images/6.jpg';
import Se from '../images/7.jpg';
import E from '../images/8.jpg';
import N from '../images/9.jpg';
import Ten from '../images/10.jpg';
import El from '../images/11.jpg';
import Tw from '../images/12.jpg';
import Thi from '../images/13.jpg';
import Fo from '../images/14.jpg';

import LoveL from '../images/love-letter.png';
import Love from '../images/love.png';
import Hearts from '../images/hearts.png';
import Arrow from '../images/down-arrow.png';
import Proposal from '../images/proposal.mp4';

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollAnimation from 'react-animate-on-scroll';


function Story() {

  return (
    <>
    <div className="love-story" id="story">
      
      {/* <AnimationOnScroll animateIn="fadeIn" animateOut="fadeOut" duration=".6" className="bg-img"> */}

      {/* </AnimationOnScroll> */}

      <div className='love-text'>
        <h1>Our Love Story</h1><img src={Love} />
      </div>

      <div className="story">
        <div className='met-her'>
            <AnimationOnScroll  animateIn="slideInLeft" animateOut="fadeOut" duration=".6" className='met-img'>
                <img src={El} />
            </AnimationOnScroll>
            <AnimationOnScroll  animateIn="fadeIn" animateOut="fadeOut" duration=".6" className='how'>
                <AnimationOnScroll  animateIn="slideInRight" animateOut="fadeOut" duration=".6" ><h1>How I met Grace.</h1></AnimationOnScroll>
                <AnimationOnScroll  animateIn="fadeIn" animateOut="fadeOut" duration=".6">
                    <p>
                    My first conscious notice of Grace was in church. It was not a service day, but we were all in church preparing for service. Somehow, I noticed that whenever I looked her direction, our eyes were always locking. "Who is this beautiful lady? I think she likes me," I said to myself.

                   <br /><br /> AFL once said to me "Who go bless you no go stress you" and it was my watchword for that season. I trusted God for a prepared person, a prepared blessing.

                    <br /><br /> To cut it short, we began from Instagram, where she followed me back and suddenly liked so many posts of mine (iykyk). I sent her a message and she responded stating how much my videos blessed her and she even added that she saved some for later. Lol. Smart lady.

                    <br /><br /> We proceeded to Whatsapp and our first phone conversation lasted for hours. I was so so thrilled. I couldn't wrap my head around how much we connected at once. I immediately requested that we hang out so I could be sure all boxes ticked. I'm not too good with patience so I requested that we hung out the next day.



                    </p>
                </AnimationOnScroll>
            </AnimationOnScroll>

            <AnimationOnScroll  animateIn="fadeIn" animateOut="fadeOut" duration=".6" className='how how-next'>
                <AnimationOnScroll  animateIn="fadeIn" animateOut="fadeOut" duration=".6">
                    <p>
                        From the moment we had our first physical hangout, I knew it, I was going to marry this girl, and I didn't hide it. I loved the spark I saw in her eyes, I was fascinated by her convictions and approach to life. Her intelligence...! My goodness, mind-blowing. Her personality and charisma was just everything to me.

                        <br /><br /> With prayers, confirmations, guidance from our spiritual parents, support and lots of love from family and friends, we are here, about to tie the knot on a journey to forever.

                        <br /><br /> I love this babe so much. I just can't wait!
                    </p>
                </AnimationOnScroll>
            </AnimationOnScroll>
        </div>

        <div className='love-letter'>
            <img src={LoveL} />
        </div>
        
        <div className='met-her met-him'>
            <AnimationOnScroll  animateIn="slideInLeft" animateOut="fadeOut" duration=".6" className='met-img met-img-him'>
                <img className='met-imm' src={Ten} />
            </AnimationOnScroll>
            <AnimationOnScroll  animateIn="fadeIn" animateOut="fadeOut" duration=".6" className='how2'>
                <AnimationOnScroll  animateIn="slideInRight" animateOut="fadeOut" duration=".6" ><h1>When I met PTA.</h1></AnimationOnScroll>
                <AnimationOnScroll  animateIn="fadeIn" animateOut="fadeOut" duration=".6">
                <p>
                    I honestly thought he had liked me. He sent me a message on social media. 

                    <br /><br />Then, there was a time that we met in church on a non-service day and our eyes were always locking. The way he looked at me, I wondered if he had noticed me enough to have liked me. 

                    <br /><br />I got home one day and rested my back behind my door, saying, “God, are you trying to give me this man?” Then, I found myself smiling, slept and had a dream that answered my questions to a T.

                    <br /><br />I liked him, ngl. Our first date, he was already speaking to me about marriage. That would have ordinarily been a turn off for me but I remembered the words of my AFL, “Grace, God is going to be granting you speed in certain areas of your life. You don’t worry, just relax. It will happen.” Shout out to you, Dad. It's so strange how prophetic words don't fall to the ground. I remember my first conversation with AFL, how he told me God has an inheritance for me in SLC. Little did I know! Lol.


                </p>
                </AnimationOnScroll>
            </AnimationOnScroll>

            <AnimationOnScroll  animateIn="fadeIn" animateOut="fadeOut" duration=".6" className='how2 how2-next'>
                <AnimationOnScroll  animateIn="fadeIn" animateOut="fadeOut" duration=".6">
                <p>
                    Now, because I was like a doubting Thomas who was insatiable with the confirmations, I asked God for more. I felt like I had reached a point in my life and destiny where I could no longer afford to miss it in my marriage. Trust God; He was cheerful with settling the confirmations in my heart because I asked. Hence, growing in love with my PTA was seamless. Shout to You, God.

                    <br /><br />I love my man so much. I had been hearing couples call their spouses “my person” in the past but it made sense to me when I met mine. Looking forward to forever with my forever love.
                </p>
                </AnimationOnScroll>
            </AnimationOnScroll>
        </div>

      </div>
    </div>
    <div className='video-prop'>
        <img src={Arrow} />
        <video autoPlay muted loop>
            <source src={Proposal} type="video/mp4" />
        </video>
        
    </div>
    </>
  );
}

export default Story;
