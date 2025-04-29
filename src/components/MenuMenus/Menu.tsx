









// 'use client'
// import { useEffect, useState } from 'react';
// import './style.css'
// const MenuMenus = () => {
//   const [isActive, setIsActive] = useState(false);
//   const [isSongActive, setIsSongActive] = useState(false);

//   useEffect(() => {
//     const photoWrappers = document.querySelectorAll('.photo-wrapper');

//     photoWrappers.forEach((item, i) => {
//       const photo = item.querySelector('.photo');

//       const photoShadow = photo.cloneNode(true) as HTMLElement;
//       photoShadow.style.filter = 'brightness(1.5) saturate(1) blur(48px)';
//       photoShadow.style.zIndex = 'auto';
//       item.appendChild(photoShadow);
//     });

//     const toggle = document.querySelector('.toggle');
//     const content = document.querySelector('.content');
//     const modal = document.querySelector('.modal');

//     toggle?.addEventListener('click', () => {
//       if (isActive) {
//         content?.classList.remove('active');
//         modal?.classList.remove('active');
//         setIsActive(false);
//       } else {
//         content?.classList.add('active');
//         modal?.classList.add('active');
//         setIsActive(true);
//       }
//     });

//     const songOpen = document.querySelector('#songOpen');
//     const songClose = document.querySelector('#songClose');
//     const songModal = document.querySelector('.song-modal');

//     const windowPos = () => {
//       if (songModal && songOpen && content) {
//         songModal.style.top = `${songOpen.getBoundingClientRect().top - content.getBoundingClientRect().top - 2}px`;
//       }
//     };

//     songOpen?.addEventListener('click', () => {
//       if (songModal && songOpen && content) {
//         const distanceY = window.innerHeight - songOpen.getBoundingClientRect().bottom + content.getBoundingClientRect().top - 390;
//         songModal.style.transform = `translateY(${distanceY}px)`;
//         content.classList.add('active');
//         songModal.classList.add('active');
//         modal?.style.setProperty('display', 'none');
//         setIsSongActive(true);
//       }
//     });

//     songClose?.addEventListener('click', () => {
//       if (songModal && content && modal) {
//         songModal.style.transform = `translateY(0px)`;
//         content.classList.remove('active');
//         songModal.classList.remove('active');
//         modal.style.setProperty('display', 'block');
//         setIsSongActive(false);
//       }
//     });

//     windowPos();
//     window.addEventListener('resize', windowPos);

//     return () => {
//       window.removeEventListener('resize', windowPos);
//     };
//   }, [isActive, isSongActive]);

//   return (
//     <main className='mmain'>
//       <div className="content-wrapper">
//         <div className="content">
//           <div className="main-content">
//             <div className="photo-wrapper">
//               <img className="photo" src="https://ca-times.brightspotcdn.com/dims4/default/d5f6173/2147483647/strip/true/crop/4436x4403+0+0/resize/1200x1191!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5b%2F8d%2F9918bf924c09ae2ff707b58a9484%2Fcowboy-carter-press-03.jpg" />
//             </div>
//             <div className="main-info">
//               <div className="title-container">
//                 <h1 className='hh1'>Cowboy Carter</h1>
//                 <div className="title-info">
//                   <p className="pp1 light">
//                     Country
//                   </p>
//                   <div className="divider"></div>
//                   <p className="pp1 light">
//                     27 songs
//                   </p>
//                   <div className="divider"></div>
//                   <p className="pp1 light">
//                     2024
//                   </p>
//                 </div>
//               </div>
//               <div className="songs">
//                 <div className="song" id="songOpen">
//                   <p className="pp1 bold">American Requiem</p>
//                   <div className="end">
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="white" />
//                     </svg>
//                     <p className="pp1 light">5:25</p>
//                   </div>
//                 </div>
//                 <div className="song">
//                   <p className="pp1 bold">Blackbiird</p>
//                   <p className="pp1 light">2:11</p>
//                 </div>
//                 <div className="song">
//                   <p className="pp1 bold">16 Carriages</p>
//                   <p className="pp1 light">3:47</p>
//                 </div>
//                 <div className="song">
//                   <p className="pp1 bold">Protector</p>
//                   <p className="pp1 light">3:04</p>
//                 </div>
//                 <div className="song">
//                   <p className="pp1 bold">My Rose</p>
//                   <p className="pp1 light">0:53</p>
//                 </div>
//                 <div className="song">
//                   <p className="pp1 bold">Smoke Hour ★ Willie Nelson</p>
//                   <p className="pp1 light">0:50</p>
//                 </div>
//                 <div className="song">
//                   <p className="pp1 bold">Texas Hold 'Em'</p>
//                   <p className="pp1 light">3:53</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="song-modal">
//             <div className="song">
//               <p className="pp1 bold">American Requiem</p>
//               <div className="end">
//                 <svg id="songClose" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M17.667 11.666H5.66699M11.667 5.66602V17.666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                 </svg>
//                 <p className="pp1 light">5:25</p>
//               </div>
//             </div>
//             <div className="song-modal-info">
//               <div className="song-credits">
//                 <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0696 4.83911C19 4.76937 18.9173 4.71405 18.8262 4.67631C18.7352 4.63857 18.6376 4.61914 18.539 4.61914C18.4405 4.61914 18.3429 4.63857 18.2518 4.67631C18.1608 4.71405 18.078 4.76937 18.0084 4.83911L17.3544 5.49311C16.9344 5.29256 16.4625 5.22721 16.0038 5.30606C15.5451 5.38491 15.1221 5.60407 14.7931 5.93336L6.83789 13.8879L11.0806 18.1306L19.0366 10.1769C19.3658 9.84782 19.5848 9.42481 19.6635 8.9661C19.7423 8.50738 19.6768 8.03555 19.4761 7.61561L20.1309 6.96086C20.2715 6.82021 20.3505 6.62948 20.3505 6.43061C20.3505 6.23173 20.2715 6.041 20.1309 5.90036L19.0696 4.83911ZM15.8686 11.2216L11.0806 16.0096L8.95964 13.8879L13.7469 9.10061L15.8686 11.2216ZM17.2321 9.85811L17.9746 9.11561C18.0444 9.04595 18.0997 8.96323 18.1374 8.87219C18.1752 8.78114 18.1946 8.68354 18.1946 8.58498C18.1946 8.48642 18.1752 8.38882 18.1374 8.29778C18.0997 8.20673 18.0444 8.12401 17.9746 8.05436L16.9149 6.99386C16.8452 6.92412 16.7625 6.8688 16.6715 6.83106C16.5804 6.79332 16.4828 6.77389 16.3843 6.77389C16.2857 6.77389 16.1881 6.79332 16.0971 6.83106C16.006 6.8688 15.9233 6.92412 15.8536 6.99386L15.1111 7.73636L17.2321 9.85811Z" fill="white" fill-opacity="0.45" />
//                   <path d="M4.62207 20.3315L6.21357 14.498L10.4556 18.7408L4.62207 20.3315Z" fill="white" fill-opacity="0.45" />
//                 </svg>
//                 <p className="pp1 light">Beyoncé, Raphael Saadiq <u>& 10 more</u></p>
//                 <svg style={{ marginLeft: '40px' }} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M5.70039 20.1004C5.20539 20.1004 4.78179 19.9243 4.42959 19.5721C4.07739 19.2199 3.90099 18.796 3.90039 18.3004V5.70039C3.90039 5.20539 4.07679 4.78179 4.42959 4.42959C4.78239 4.07739 5.20599 3.90099 5.70039 3.90039H18.3004C18.7954 3.90039 19.2193 4.07679 19.5721 4.42959C19.9249 4.78239 20.101 5.20599 20.1004 5.70039V18.3004C20.1004 18.7954 19.9243 19.2193 19.5721 19.5721C19.2199 19.9249 18.796 20.101 18.3004 20.1004H5.70039ZM5.70039 18.3004H8.62539V14.2504H8.40039C8.14539 14.2504 7.93179 14.164 7.75959 13.9912C7.58739 13.8184 7.50099 13.6048 7.50039 13.3504V5.70039H5.70039V18.3004ZM15.3754 18.3004H18.3004V5.70039H16.5004V13.3504C16.5004 13.6054 16.414 13.8193 16.2412 13.9921C16.0684 14.1649 15.8548 14.251 15.6004 14.2504H15.3754V18.3004ZM9.97539 18.3004H14.0254V14.2504H13.8004C13.5454 14.2504 13.3318 14.164 13.1596 13.9912C12.9874 13.8184 12.901 13.6048 12.9004 13.3504V5.70039H11.1004V13.3504C11.1004 13.6054 11.014 13.8193 10.8412 13.9921C10.6684 14.1649 10.4548 14.251 10.2004 14.2504H9.97539V18.3004Z" fill="white" fill-opacity="0.45" />
//                 </svg>
//                 <p className="pp1 light">Beyoncé, Jon Batiste <u>& 6 more</u></p>
//               </div>
//               <br />
//               <p className="pp1 bold">‘AMERIICAN REQUIEM’ opens ‘COWBOY CARTER’ – Beyoncés eighth studio album and the second part of her trilogy project that began with the release of ‘RENAISSANCE’ in 2022.</p>
//               <br />
//               <p className="pp1 bold">The song “American Requiem” sets the stage by calling out the systemic racism that continues to oppress 60 years after the Civil Rights Movement.“Nothing really ends/ for things to stay the same, they have to change again/ Hello, my old friend/ You changed your name but not the way you play pretend/ American Requiem/ Them big ideas are buried here/ Amen.”</p>
//               <br />
//               <p className="pp1 bold">Ta-Nehisi Coates has described American whiteness as “an existential danger to the country and the world” and explains how white Christian Nationalism conflates a whiteness that “is neither national nor symbolic but is the very core of [its] power… But whereas [its] forebears carried whiteness like an ancestral talisman… [they have now] cracked the glowing amulet open, releasing its eldritch energies.” Similarly in “American Requiem,” Beyoncé calls on the listener to bury the “big ideas” of the past – born from colonization and systemic racism – and get ready for the truth she brings.</p>
//             </div>

//             <div className="gradient-blur">
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//             </div>
//           </div>
//           <div className="modal">
//             <div className="toggle">
//               <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M16.667 10.666H4.66699M10.667 4.66602V16.666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//               </svg>
//             </div>
//             <div className="modal-content">
//               <div className="photo-wrapper">
//                 <h1 className='hh1'>Beyoncé</h1>
//                 <img className="photo" src="https://www.billboard.com/wp-content/uploads/2022/08/22-beyonce-cr-mason-poole-2022-billboard-1548.jpg?w=942&h=623&crop=1" />
//               </div>
//               <div className="info">
//                 <div className="info-top">
//                   <div className="info-top-left">
//                     <p className="pp1 genre light">
//                       Pop
//                     </p>
//                     <div className="divider"></div>
//                     <p className="pp1 light">
//                       38 songs
//                     </p>
//                   </div>
//                   <p className="pp1 light">
//                     7M listeners
//                   </p>
//                 </div>
//                 <p className="pp1 bold">
//                   Beyoncé Giselle Knowles-Carter is an American singer, songwriter, and businesswoman. Nicknamed "Queen Bey", she is regarded as a prominent cultural figure of the 21st century. Throughout her two-decade career, Beyoncé has been recognized for her distinctive vocal range, live performances, and songwriting. Rolling Stone named her the world's greatest living entertainer, and one of the greatest vocalists of all time. Rolling Stone named her the world's greatest living entertainer, and one of the greatest vocalists of all time.
//                 </p>
//               </div>
//             </div>
//             <div className="gradient-blur">
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//               <div></div>
//             </div>
//             <div className="shade">
//             </div>

//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default MenuMenus;


















'use client'
import { useEffect, useState } from 'react';
import './style.css';
import SectionTitle from '../Work/SectionTitle';

const MenuMenus: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isSongActive, setIsSongActive] = useState<boolean>(false);

  useEffect(() => {
    const photoWrappers = document.querySelectorAll('.photo-wrapper');

    photoWrappers.forEach((item, i) => {
      const photo = item.querySelector('.photo');

      const photoShadow = photo?.cloneNode(true) as HTMLElement;
      if (photoShadow) {
        photoShadow.style.filter = 'brightness(1.5) saturate(1) blur(48px)';
        photoShadow.style.zIndex = 'auto';
        item.appendChild(photoShadow);
      }
    });

    const toggle = document.querySelector('.toggle');
    const content = document.querySelector('.content');
    const modal = document.querySelector('.modal');

    toggle?.addEventListener('click', () => {
      if (isActive) {
        content?.classList.remove('active');
        modal?.classList.remove('active');
        setIsActive(false);
      } else {
        content?.classList.add('active');
        modal?.classList.add('active');
        setIsActive(true);
      }
    });

    const songOpen = document.querySelector('#songOpen');
    const songClose = document.querySelector('#songClose');
    const songModal = document.querySelector('.song-modal');

    const windowPos = () => {
      if (songModal && songOpen && content) {
        songModal.style.top = `${songOpen.getBoundingClientRect().top - content.getBoundingClientRect().top - 2}px`;
      }
    };

    songOpen?.addEventListener('click', () => {
      if (songModal && songOpen && content) {
        const distanceY = window.innerHeight - songOpen.getBoundingClientRect().bottom + content.getBoundingClientRect().top - 390;
        songModal.style.transform = `translateY(${distanceY}px)`;
        content.classList.add('active');
        songModal.classList.add('active');
        modal?.style.setProperty('display', 'none');
        setIsSongActive(true);
      }
    });

    songClose?.addEventListener('click', () => {
      if (songModal && content && modal) {
        songModal.style.transform = `translateY(0px)`;
        content.classList.remove('active');
        songModal.classList.remove('active');
        modal.style.setProperty('display', 'block');
        setIsSongActive(false);
      }
    });

    windowPos();
    window.addEventListener('resize', windowPos);

    return () => {
      window.removeEventListener('resize', windowPos);
    };
  }, [isActive, isSongActive]);

  return (
    <div className='mt-[20%]'>
      <div className="text3">

        <SectionTitle title="Projects" progressBgClass="bg-primary"></SectionTitle>
        {/* <SectionTitle title="Experience" progressBgClass="bg-primary"></SectionTitle> */}
      </div>
      <main className='mmain mt-[10%]'>
        <div className="content-wrapper">
          <div className="content">
            <div className="main-content">
              <div className="photo-wrapper">
                <img className="photo" src="https://ca-times.brightspotcdn.com/dims4/default/d5f6173/2147483647/strip/true/crop/4436x4403+0+0/resize/1200x1191!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5b%2F8d%2F9918bf924c09ae2ff707b58a9484%2Fcowboy-carter-press-03.jpg" alt="Cowboy Carter" />
              </div>
              <div className="main-info">
                <div className="title-container">
                  <h1 className='hh1'>Cowboy Carter</h1>
                  <div className="title-info">
                    <p className="pp1 light">
                      Country
                    </p>
                    <div className="divider"></div>
                    <p className="pp1 light">
                      27 songs
                    </p>
                    <div className="divider"></div>
                    <p className="pp1 light">
                      2024
                    </p>
                  </div>
                </div>
                <div className="songs">
                  <div className="song" id="songOpen">
                    <p className="pp1 bold">American Requiem</p>
                    <div className="end">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="white" />
                      </svg>
                      <p className="pp1 light">5:25</p>
                    </div>
                  </div>
                  {/* <div className="song">
                  <p className="pp1 bold">Blackbiird</p>
                  <p className="pp1 light">2:11</p>
                </div>
                <div className="song">
                  <p className="pp1 bold">16 Carriages</p>
                  <p className="pp1 light">3:47</p>
                </div>
                <div className="song">
                  <p className="pp1 bold">Protector</p>
                  <p className="pp1 light">3:04</p>
                </div>
                <div className="song">
                  <p className="pp1 bold">My Rose</p>
                  <p className="pp1 light">0:53</p>
                </div>
                <div className="song">
                  <p className="pp1 bold">Smoke Hour ★ Willie Nelson</p>
                  <p className="pp1 light">0:50</p>
                </div>
                <div className="song">
                  <p className="pp1 bold">Texas Hold 'Em'</p>
                  <p className="pp1 light">3:53</p>
                </div> */}
                </div>
              </div>
            </div>
            <div className="song-modal">
              <div className="song">
                <p className="pp1 bold">American Requiem</p>
                <div className="end">
                  <svg id="songClose" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.667 11.666H5.66699M11.667 5.66602V17.666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="pp1 light">5:25</p>
                </div>
              </div>
              <div className="song-modal-info">
                <div className="song-credits">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.0696 4.83911C19 4.76937 18.9173 4.71405 18.8262 4.67631C18.7352 4.63857 18.6376 4.61914 18.539 4.61914C18.4405 4.61914 18.3429 4.63857 18.2518 4.67631C18.1608 4.71405 18.078 4.76937 18.0084 4.83911L17.3544 5.49311C16.9344 5.29256 16.4625 5.22721 16.0038 5.30606C15.5451 5.38491 15.1221 5.60407 14.7931 5.93336L6.83789 13.8879L11.0806 18.1306L19.0366 10.1769C19.3658 9.84782 19.5848 9.42481 19.6635 8.9661C19.7423 8.50738 19.6768 8.03555 19.4761 7.61561L20.1309 6.96086C20.2715 6.82021 20.3505 6.62948 20.3505 6.43061C20.3505 6.23173 20.2715 6.041 20.1309 5.90036L19.0696 4.83911ZM15.8686 11.2216L11.0806 16.0096L8.95964 13.8879L13.7469 9.10061L15.8686 11.2216ZM17.2321 9.85811L17.9746 9.11561C18.0444 9.04595 18.0997 8.96323 18.1374 8.87219C18.1752 8.78114 18.1946 8.68354 18.1946 8.58498C18.1946 8.48642 18.1752 8.38882 18.1374 8.29778C18.0997 8.20673 18.0444 8.12401 17.9746 8.05436L16.9149 6.99386C16.8452 6.92412 16.7625 6.8688 16.6715 6.83106C16.5804 6.79332 16.4828 6.77389 16.3843 6.77389C16.2857 6.77389 16.1881 6.79332 16.0971 6.83106C16.006 6.8688 15.9233 6.92412 15.8536 6.99386L15.1111 7.73636L17.2321 9.85811Z" fill="white" fillOpacity="0.45" />
                    <path d="M4.62207 20.3315L6.21357 14.498L10.4556 18.7408L4.62207 20.3315Z" fill="white" fillOpacity="0.45" />
                  </svg>
                  <p className="pp1 light">Beyoncé, Raphael Saadiq <u>& 10 more</u></p>
                  <svg style={{ marginLeft: '40px' }} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.70039 20.1004C5.20539 20.1004 4.78179 19.9243 4.42959 19.5721C4.07739 19.2199 3.90099 18.796 3.90039 18.3004V5.70039C3.90039 5.20539 4.07679 4.78179 4.42959 4.42959C4.78239 4.07739 5.20599 3.90099 5.70039 3.90039H18.3004C18.7954 3.90039 19.2193 4.07679 19.5721 4.42959C19.9249 4.78239 20.101 5.20599 20.1004 5.70039V18.3004C20.1004 18.7954 19.9243 19.2193 19.5721 19.5721C19.2199 19.9249 18.796 20.101 18.3004 20.1004H5.70039ZM5.70039 18.3004H8.62539V14.2504H8.40039C8.14539 14.2504 7.93179 14.164 7.75959 13.9912C7.58739 13.8184 7.50099 13.6048 7.50039 13.3504V5.70039H5.70039V18.3004ZM15.3754 18.3004H18.3004V5.70039H16.5004V13.3504C16.5004 13.6054 16.414 13.8193 16.2412 13.9921C16.0684 14.1649 15.8548 14.251 15.6004 14.2504H15.3754V18.3004ZM9.97539 18.3004H14.0254V14.2504H13.8004C13.5454 14.2504 13.3318 14.164 13.1596 13.9912C12.9874 13.8184 12.901 13.6048 12.9004 13.3504V5.70039H11.1004V13.3504C11.1004 13.6054 11.014 13.8193 10.8412 13.9921C10.6684 14.1649 10.4548 14.251 10.2004 14.2504H9.97539V18.3004Z" fill="white" fillOpacity="0.45" />
                  </svg>
                  <p className="pp1 light">Beyoncé, Jon Batiste <u>& 6 more</u></p>
                </div>
                <br />
                <p className="pp1 bold">‘AMERIICAN REQUIEM’ opens ‘COWBOY CARTER’ – Beyoncés eighth studio album and the second part of her trilogy project that began with the release of ‘RENAISSANCE’ in 2022.</p>
                <br />
                <p className="pp1 bold">The song “American Requiem” sets the stage by calling out the systemic racism that continues to oppress 60 years after the Civil Rights Movement.“Nothing really ends/ for things to stay the same, they have to change again/ Hello, my old friend/ You changed your name but not the way you play pretend/ American Requiem/ Them big ideas are buried here/ Amen.”</p>
                <br />
                <p className="pp1 bold">Ta-Nehisi Coates has described American whiteness as “an existential danger to the country and the world” and explains how white Christian Nationalism conflates a whiteness that “is neither national nor symbolic but is the very core of [its] power… But whereas [its] forebears carried whiteness like an ancestral talisman… [they have now] cracked the glowing amulet open, releasing its eldritch energies.” Similarly in “American Requiem,” Beyoncé calls on the listener to bury the “big ideas” of the past – born from colonization and systemic racism – and get ready for the truth she brings.</p>
              </div>

              <div className="gradient-blur">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="modal">
              <div className="toggle">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.667 10.666H4.66699M10.667 4.66602V16.666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="modal-content">
                <div className="photo-wrapper">
                  <h1 className='hh1'>Beyoncé</h1>
                  <img className="photo" src="https://www.billboard.com/wp-content/uploads/2022/08/22-beyonce-cr-mason-poole-2022-billboard-1548.jpg?w=942&h=623&crop=1" alt="Beyoncé" />
                </div>
                <div className="info">
                  <div className="info-top">
                    <div className="info-top-left">
                      <p className="pp1 genre light">
                        Pop
                      </p>
                      <div className="divider"></div>
                      <p className="pp1 light">
                        38 songs
                      </p>
                    </div>
                    <p className="pp1 light">
                      7M listeners
                    </p>
                  </div>
                  <p className="pp1 bold">
                    Beyoncé Giselle Knowles-Carter is an American singer, songwriter, and businesswoman. Nicknamed "Queen Bey", she is regarded as a prominent cultural figure of the 21st century. Throughout her two-decade career, Beyoncé has been recognized for her distinctive vocal range, live performances, and songwriting. Rolling Stone named her the world's greatest living entertainer, and one of the greatest vocalists of all time. Rolling Stone named her the world's greatest living entertainer, and one of the greatest vocalists of all time.
                  </p>
                </div>
              </div>
              <div className="gradient-blur">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="shade">
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuMenus;