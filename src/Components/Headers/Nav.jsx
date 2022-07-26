import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
   return (
      <>
         <header class="header" id="header">
            <nav class="navbar container">
               <svg width="283" height="54" viewBox="0 0 283 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.52002 0.0961914H65.17V53.1256H0.52002V0.0961914Z" fill="#FFF212" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M65.1699 0.0961914H276.28C279.58 0.0961914 282.28 2.77857 282.28 6.06923V46.1454C282.28 49.9845 279.14 53.1156 275.29 53.1156H65.1699V0.0961914Z" fill="black" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M33.5002 12.9297C33.3002 13.2189 32.1902 13.9269 30.1702 15.0537C28.1402 16.1705 27.0502 16.6491 26.8802 16.4896C26.7402 16.36 26.9002 16.011 27.3602 15.4525C27.8202 14.8941 28.0202 14.5252 27.9602 14.3457C26.4702 14.924 24.9802 15.4924 23.5102 16.0508C20.4102 17.8757 17.6102 20.0096 15.1302 22.4327C12.6502 24.8558 11.4102 27.1294 11.4102 29.2533C11.4102 29.9115 11.7102 30.2505 12.3202 30.2505C13.3802 30.2505 15.0102 29.4528 17.2102 27.8773C19.4102 26.3017 21.9202 24.3573 24.7202 22.0339C27.5202 19.7104 28.9902 18.5338 29.1302 18.474C29.3502 18.3742 29.7802 18.464 30.4202 18.7532C31.0602 19.0423 31.4602 19.4312 31.6202 19.9099C31.7102 20.1991 31.4002 20.9569 30.6902 22.1735C29.9802 23.39 28.8602 25.2647 27.3402 27.7975C25.8102 30.3303 25.0802 31.6466 25.1302 31.7562C26.0802 31.3574 27.0202 30.9585 27.9602 30.5596C29.7402 29.4528 30.6402 28.9043 30.6702 28.9343C31.0002 29.2733 30.2002 30.1907 28.2702 31.6765C26.3502 33.1622 24.3302 34.6779 22.2202 36.2136C21.8602 36.9515 20.4302 38.527 17.9402 40.9402C15.4402 43.3533 13.5602 44.5599 12.2802 44.5599C11.8702 44.5599 11.5402 44.3904 11.3002 44.0613C11.0702 43.7322 10.9502 43.3832 10.9502 43.0143C10.9502 41.7379 11.8902 40.2322 13.7802 38.4971C15.6602 36.762 16.9202 35.7549 17.5402 35.4757C18.1702 35.1965 19.4102 33.6209 21.2702 30.7391C23.1202 27.8673 23.9302 26.2918 23.6802 26.0325C23.6002 25.9527 22.6502 26.5909 20.8302 27.957C19.0102 29.3232 17.3302 30.4898 15.7702 31.4371C14.2202 32.3944 12.9002 32.8731 11.8202 32.8731C10.8002 32.8731 9.93016 32.2249 9.22016 30.9386C8.52016 29.6522 8.16016 28.2861 8.16016 26.8302C8.16016 23.4598 9.65016 20.3985 12.6102 17.6363C15.5802 14.8842 19.0102 12.7203 22.8902 11.1348C26.7702 9.55928 29.8902 8.77152 32.2502 8.77152C32.5502 8.77152 32.7702 8.77152 32.9102 8.77152C33.1602 8.77152 33.3702 9.07067 33.5402 9.67894C33.7002 10.2673 33.7902 10.8955 33.7902 11.5337C33.7902 12.1719 33.6902 12.6405 33.5002 12.9297ZM57.7902 16.4198C57.8402 16.709 57.8702 17.0081 57.8702 17.3172C57.8702 17.6264 57.8702 17.9155 57.8702 18.2147C57.8702 23.0709 55.9002 27.4983 51.9602 31.5069C48.0302 35.5255 44.1302 37.5199 40.2802 37.5199C39.8602 37.5199 39.0302 37.46 37.7802 37.3204C36.5302 37.1908 35.4202 36.2634 34.4502 34.5383C33.4802 32.8132 33.0002 31.138 33.0002 29.4927C33.0002 26.1522 34.1502 22.8814 36.4502 19.6706C38.7502 16.4597 41.5202 13.8272 44.7702 11.753C48.0102 9.68891 50.9102 8.65186 53.4602 8.65186C53.7702 8.65186 53.9902 8.65186 54.1302 8.65186C54.5702 8.68177 55.1802 9.2003 55.9402 10.2274C56.7002 11.2545 57.0302 11.9525 56.9202 12.3214C56.0802 12.6605 55.4202 12.9297 54.9202 13.1192C54.7002 13.2987 54.4902 13.4682 54.2902 13.6277C54.3802 13.7075 54.9502 13.877 56.0002 14.1263C57.0502 14.3756 57.6502 15.1434 57.7902 16.4198ZM53.7102 16.0508C53.3202 15.8414 52.8802 15.7317 52.3802 15.7317C50.6302 15.7317 48.4902 16.7588 45.9502 18.813C43.4202 20.8672 42.1502 22.4028 42.1502 23.4099C41.9502 23.38 41.7602 23.3501 41.5702 23.3302C41.0902 23.1706 40.8002 23.1507 40.6902 23.2903C39.5302 24.6165 38.6102 26.1322 37.9302 27.8374C37.2502 29.5525 36.9102 31.0582 36.9102 32.3545C36.9102 33.3318 37.0702 34.0098 37.4102 34.3788C37.7402 34.7477 38.1802 34.9372 38.7402 34.9372C40.0702 34.9372 41.9102 34.1794 44.2702 32.6736C46.6302 31.1579 48.4402 29.6123 49.7202 28.0169C50.9902 26.4314 52.1102 24.6464 53.0702 22.672C54.0202 20.6976 54.5002 19.0723 54.5002 17.7959C54.5002 16.9483 54.2402 16.3699 53.7102 16.0508Z" fill="black" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M94.0701 12.0224V37.8191H87.3001V25.9727H80.1701V34.1495C80.1701 34.319 80.1701 34.4886 80.1701 34.6481C80.1701 34.7977 80.1701 34.9572 80.1701 35.1068C80.1901 35.5655 80.2301 36.0242 80.2801 36.4929C80.3301 36.9516 80.4301 37.4003 80.5801 37.8191L74.4401 41.728C74.0001 40.8505 73.7101 39.9231 73.5801 38.9658C73.4601 38.0086 73.3901 37.0513 73.3901 36.084V12.0224H80.1701V20.1692H87.3001V12.0224H94.0701ZM109.08 38.3875C106.02 38.3875 103.57 37.1909 101.72 34.7877C99.8701 32.3845 98.6101 29.7321 97.9301 26.8303C97.7201 25.9628 97.5701 25.1052 97.4601 24.2377C97.3501 23.3801 97.3001 22.5425 97.3001 21.7447C97.3001 18.9427 98.1301 16.5395 99.7901 14.5153C101.44 12.491 104.54 11.4839 109.08 11.4839C113.62 11.4839 116.72 12.491 118.38 14.5153C120.03 16.5395 120.86 18.9427 120.86 21.7447C120.86 22.5425 120.81 23.3801 120.7 24.2377C120.6 25.1052 120.44 25.9628 120.23 26.8303C119.55 29.7321 118.29 32.3845 116.44 34.7877C114.6 37.1909 112.14 38.3875 109.08 38.3875ZM109.08 32.2948C110.18 32.3147 111.16 31.4671 112.01 29.752C112.87 28.0369 113.42 26.1423 113.67 24.0781C113.71 23.7491 113.75 23.41 113.77 23.071C113.79 22.7319 113.8 22.3929 113.8 22.0638C113.8 20.3387 113.43 19.1421 112.69 18.494C111.95 17.8358 110.75 17.5168 109.08 17.5168C107.41 17.5168 106.21 17.8358 105.47 18.494C104.73 19.1421 104.36 20.3288 104.36 22.0539C104.36 22.3829 104.37 22.722 104.4 23.061C104.42 23.4 104.45 23.7291 104.49 24.0681C104.74 26.1223 105.3 28.0169 106.15 29.7221C107.01 31.4372 107.98 32.2948 109.08 32.2948ZM143.66 18.6236V37.8191H136.88V29.6423H129.47C129.5 31.1082 129.75 32.5341 130.23 33.9202C130.72 35.2963 131.33 36.5926 132.07 37.8191L126.56 41.4488C125.32 39.5741 124.33 37.5399 123.62 35.3461C122.9 33.1623 122.54 30.9187 122.54 28.6452C122.54 28.3959 122.55 28.1366 122.56 27.8773C122.57 27.6181 122.58 27.3588 122.6 27.0995C122.75 25.0952 123.19 23.1508 123.93 21.2462C124.67 19.3515 125.76 17.6863 127.19 16.2603C129.01 14.4455 130.97 13.2788 133.08 12.7802C135.2 12.2716 137.47 12.0224 139.89 12.0224L143.22 11.9825L144.8 17.8259H139.48C136.93 17.8458 135.04 18.2547 133.81 19.0424C132.59 19.8302 131.69 20.7077 131.12 21.655C130.91 22.0339 130.72 22.4128 130.57 22.8017C130.41 23.1906 130.27 23.5496 130.14 23.8587H136.88V18.6236H143.66ZM148.44 12.0224H160.92C163.45 12.0423 165.29 12.5808 166.44 13.6378C167.6 14.6948 168.32 15.8615 168.61 17.1578C168.66 17.417 168.69 17.6763 168.73 17.9455C168.76 18.2247 168.77 18.494 168.77 18.7433C168.77 20.608 168.22 22.2034 167.13 23.4998C166.03 24.8061 164.73 25.9329 163.23 26.8802C164.22 28.8546 165.36 30.7591 166.64 32.584C167.91 34.4088 169.28 36.1538 170.74 37.8191L165.07 41.728C162.98 39.3747 161.12 36.8319 159.49 34.1096C157.87 31.3874 156.41 28.5953 155.12 25.7135C155.44 25.4642 155.83 25.175 156.3 24.8559C156.76 24.5468 157.24 24.2078 157.72 23.8587C158.57 23.2206 159.34 22.5325 160.05 21.7846C160.76 21.0368 161.11 20.2789 161.11 19.5011C161.11 18.8928 160.89 18.484 160.46 18.2746C160.03 18.0652 159.56 17.9455 159.05 17.9256C158.88 17.9056 158.72 17.8957 158.56 17.8957C158.4 17.8957 158.25 17.8957 158.1 17.8957C158.06 17.8957 158.02 17.8957 157.97 17.8957C157.93 17.8957 157.89 17.8957 157.85 17.8957L146.86 17.8658L148.44 12.0224ZM154.9 18.6535V37.8191H148.13V18.6535H154.9ZM177.7 37.8191H172.19V18.6236H178.97V32.0056C181.29 31.9258 183.2 30.9386 184.69 29.044C186.17 27.1494 186.92 25.0454 186.92 22.7519C186.92 21.2561 186.63 20.1792 186.06 19.5011C185.49 18.833 184.87 18.3743 184.19 18.145C183.75 17.9954 183.32 17.9156 182.91 17.8957C182.5 17.8757 182.17 17.8658 181.91 17.8658L170.93 17.8259L172.51 12.0224H183.5C187.36 12.0423 190.05 13.0794 191.57 15.1435C193.09 17.2076 193.85 19.541 193.85 22.1536C193.85 27.0198 192.24 30.8489 189.01 33.631C185.78 36.4231 182.01 37.8191 177.7 37.8191ZM203.67 12.0224V37.8191H196.89V12.0224H203.67ZM229.03 12.0224V37.8191H222.26V30.2107L215.1 21.5254H215.04V37.8191H208.26V12.0224H214.72L222.26 20.7974V12.0224H229.03ZM247.02 32.0056V25.9727H244.46V20.1692H253.8V37.8191H248.29C243.98 37.8191 240.21 36.4231 236.98 33.631C233.75 30.8289 232.14 26.9998 232.14 22.1336C232.14 19.5211 232.9 17.1777 234.42 15.1236C235.94 13.0494 238.63 12.0224 242.49 12.0224L251.9 11.9825L253.48 17.8259H244.08C243.82 17.8458 243.49 17.8757 243.08 17.8957C242.67 17.9156 242.24 17.9954 241.8 18.145C241.12 18.3743 240.5 18.833 239.93 19.5011C239.36 20.1692 239.07 21.2561 239.07 22.7419C239.07 25.0354 239.82 27.1195 241.3 29.0141C242.79 30.8988 244.7 31.9059 247.02 32.0056ZM270.45 12.0224L272.04 17.8658H266.34C266.25 17.8857 266.16 17.8957 266.05 17.8957C265.95 17.8957 265.83 17.8957 265.7 17.8957C265.64 17.8957 265.57 17.8957 265.48 17.8957C265.4 17.8957 265.32 17.8957 265.26 17.8957C264.9 17.9156 264.57 17.9854 264.28 18.0951C263.98 18.2148 263.84 18.4341 263.84 18.7433C263.84 19.0424 263.92 19.3117 264.09 19.551C264.26 19.7903 264.45 20.0196 264.66 20.2291C264.7 20.2889 264.75 20.3487 264.8 20.3986C264.85 20.4484 264.9 20.4983 264.94 20.5382L269.66 25.7135C270.46 26.6209 271.2 27.5483 271.86 28.5155C272.53 29.4828 272.86 30.6096 272.86 31.8959C272.86 32.205 272.83 32.5341 272.78 32.8831C272.73 33.2321 272.64 33.5911 272.51 33.97C272.17 34.9373 271.5 35.8248 270.5 36.6225C269.5 37.4202 267.96 37.8191 265.89 37.8191H258.01L256.43 32.0056H262.57C262.65 32.0056 262.75 32.0056 262.85 32.0056C262.96 32.0056 263.08 32.0056 263.2 32.0056C263.27 32.0056 263.34 32.0056 263.42 32.0056C263.51 32.0056 263.58 32.0056 263.65 32.0056C264 31.9857 264.33 31.9159 264.63 31.8062C264.92 31.6865 265.07 31.4671 265.07 31.158C265.07 30.8688 264.99 30.5996 264.82 30.3503C264.65 30.121 264.46 29.8916 264.25 29.6822C264.21 29.6224 264.16 29.5625 264.1 29.5127C264.05 29.4529 264 29.403 263.96 29.3631L259.37 24.1778C258.59 23.3003 257.87 22.373 257.2 21.4157C256.54 20.4484 256.2 19.3316 256.2 18.0552C256.2 17.7361 256.23 17.3971 256.28 17.0481C256.34 16.6991 256.43 16.3301 256.55 15.9512C256.89 14.9839 257.56 14.0865 258.56 13.2688C259.57 12.4511 261.1 12.0523 263.17 12.0523L270.45 12.0224Z" fill="white" />
               </svg>
               <div class="burger" id="burger">
                  <span class="burger-line"></span>
                  <span class="burger-line"></span>
                  <span class="burger-line"></span>
               </div>
               <div class="menu" id="menu">
                  <ul class="menu-inner">
                     <li class="menu-item"><a href="#" class="menu-link">Odoads</a></li>
                     <li class="menu-item"><a href="#" class="menu-link">Blog</a></li>
                     <li class="menu-item"><a href="#" class="menu-link">Content</a></li>
                     <li class="menu-item "><a href="#" class="menu-link map-item">Map View</a></li>
                     {/* <li class="menu-item"><a href="#" class="menu-link">User</a></li> */}
                      {/* <a href="./index.html" class="menu-block">Explore</a> */}
                  </ul>
               </div>
               <Link to='/'><img src="/asserts/icons/icons8-user-30.png" alt="" /></Link>
            </nav>
         </header>
         <main style={{ position: 'absolute', top: '4%', left: '2%',width:'10vw',height:'1vh' }}>
            <svg width="180" height="187" viewBox="0 0 180 187" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2.91 5.80352C4.51715 5.80352 5.82 4.50436 5.82 2.90176C5.82 1.29916 4.51715 0 2.91 0C1.30285 0 0 1.29916 0 2.90176C0 4.50436 1.30285 5.80352 2.91 5.80352Z" fill="#808080" />
               <path d="M46.2801 5.80352C47.8873 5.80352 49.1901 4.50436 49.1901 2.90176C49.1901 1.29916 47.8873 0 46.2801 0C44.673 0 43.3701 1.29916 43.3701 2.90176C43.3701 4.50436 44.673 5.80352 46.2801 5.80352Z" fill="#808080" />
               <path d="M89.66 5.80352C91.2671 5.80352 92.57 4.50436 92.57 2.90176C92.57 1.29916 91.2671 0 89.66 0C88.0529 0 86.75 1.29916 86.75 2.90176C86.75 4.50436 88.0529 5.80352 89.66 5.80352Z" fill="#808080" />
               <path d="M133.04 5.80352C134.647 5.80352 135.95 4.50436 135.95 2.90176C135.95 1.29916 134.647 0 133.04 0C131.433 0 130.13 1.29916 130.13 2.90176C130.13 4.50436 131.433 5.80352 133.04 5.80352Z" fill="#808080" />
               <path d="M176.41 5.80352C178.017 5.80352 179.32 4.50436 179.32 2.90176C179.32 1.29916 178.017 0 176.41 0C174.803 0 173.5 1.29916 173.5 2.90176C173.5 4.50436 174.803 5.80352 176.41 5.80352Z" fill="#808080" />
               <path d="M2.91 41.9607C4.51715 41.9607 5.82 40.6616 5.82 39.059C5.82 37.4564 4.51715 36.1572 2.91 36.1572C1.30285 36.1572 0 37.4564 0 39.059C0 40.6616 1.30285 41.9607 2.91 41.9607Z" fill="#808080" />
               <path d="M46.2801 41.9607C47.8873 41.9607 49.1901 40.6616 49.1901 39.059C49.1901 37.4564 47.8873 36.1572 46.2801 36.1572C44.673 36.1572 43.3701 37.4564 43.3701 39.059C43.3701 40.6616 44.673 41.9607 46.2801 41.9607Z" fill="#808080" />
               <path d="M89.66 41.9607C91.2671 41.9607 92.57 40.6616 92.57 39.059C92.57 37.4564 91.2671 36.1572 89.66 36.1572C88.0529 36.1572 86.75 37.4564 86.75 39.059C86.75 40.6616 88.0529 41.9607 89.66 41.9607Z" fill="#808080" />
               <path d="M133.04 41.9607C134.647 41.9607 135.95 40.6616 135.95 39.059C135.95 37.4564 134.647 36.1572 133.04 36.1572C131.433 36.1572 130.13 37.4564 130.13 39.059C130.13 40.6616 131.433 41.9607 133.04 41.9607Z" fill="#808080" />
               <path d="M176.41 41.9607C178.017 41.9607 179.32 40.6616 179.32 39.059C179.32 37.4564 178.017 36.1572 176.41 36.1572C174.803 36.1572 173.5 37.4564 173.5 39.059C173.5 40.6616 174.803 41.9607 176.41 41.9607Z" fill="#808080" />
               <path d="M2.91 78.118C4.51715 78.118 5.82 76.8188 5.82 75.2162C5.82 73.6136 4.51715 72.3145 2.91 72.3145C1.30285 72.3145 0 73.6136 0 75.2162C0 76.8188 1.30285 78.118 2.91 78.118Z" fill="#808080" />
               <path d="M46.2801 78.118C47.8873 78.118 49.1901 76.8188 49.1901 75.2162C49.1901 73.6136 47.8873 72.3145 46.2801 72.3145C44.673 72.3145 43.3701 73.6136 43.3701 75.2162C43.3701 76.8188 44.673 78.118 46.2801 78.118Z" fill="#808080" />
               <path d="M89.66 78.118C91.2671 78.118 92.57 76.8188 92.57 75.2162C92.57 73.6136 91.2671 72.3145 89.66 72.3145C88.0529 72.3145 86.75 73.6136 86.75 75.2162C86.75 76.8188 88.0529 78.118 89.66 78.118Z" fill="#808080" />
               <path d="M133.04 78.118C134.647 78.118 135.95 76.8188 135.95 75.2162C135.95 73.6136 134.647 72.3145 133.04 72.3145C131.433 72.3145 130.13 73.6136 130.13 75.2162C130.13 76.8188 131.433 78.118 133.04 78.118Z" fill="#808080" />
               <path d="M176.41 78.118C178.017 78.118 179.32 76.8188 179.32 75.2162C179.32 73.6136 178.017 72.3145 176.41 72.3145C174.803 72.3145 173.5 73.6136 173.5 75.2162C173.5 76.8188 174.803 78.118 176.41 78.118Z" fill="#808080" />
               <path d="M2.91 114.285C4.51715 114.285 5.82 112.986 5.82 111.384C5.82 109.781 4.51715 108.482 2.91 108.482C1.30285 108.482 0 109.781 0 111.384C0 112.986 1.30285 114.285 2.91 114.285Z" fill="#808080" />
               <path d="M46.2801 114.285C47.8873 114.285 49.1901 112.986 49.1901 111.384C49.1901 109.781 47.8873 108.482 46.2801 108.482C44.673 108.482 43.3701 109.781 43.3701 111.384C43.3701 112.986 44.673 114.285 46.2801 114.285Z" fill="#808080" />
               <path d="M89.66 114.285C91.2671 114.285 92.57 112.986 92.57 111.384C92.57 109.781 91.2671 108.482 89.66 108.482C88.0529 108.482 86.75 109.781 86.75 111.384C86.75 112.986 88.0529 114.285 89.66 114.285Z" fill="#808080" />
               <path d="M133.04 114.285C134.647 114.285 135.95 112.986 135.95 111.384C135.95 109.781 134.647 108.482 133.04 108.482C131.433 108.482 130.13 109.781 130.13 111.384C130.13 112.986 131.433 114.285 133.04 114.285Z" fill="#808080" />
               <path d="M176.41 114.285C178.017 114.285 179.32 112.986 179.32 111.384C179.32 109.781 178.017 108.482 176.41 108.482C174.803 108.482 173.5 109.781 173.5 111.384C173.5 112.986 174.803 114.285 176.41 114.285Z" fill="#808080" />
               <path d="M2.91 150.443C4.51715 150.443 5.82 149.144 5.82 147.541C5.82 145.938 4.51715 144.639 2.91 144.639C1.30285 144.639 0 145.938 0 147.541C0 149.144 1.30285 150.443 2.91 150.443Z" fill="#808080" />
               <path d="M46.2801 150.443C47.8873 150.443 49.1901 149.144 49.1901 147.541C49.1901 145.938 47.8873 144.639 46.2801 144.639C44.673 144.639 43.3701 145.938 43.3701 147.541C43.3701 149.144 44.673 150.443 46.2801 150.443Z" fill="#808080" />
               <path d="M89.66 150.443C91.2671 150.443 92.57 149.144 92.57 147.541C92.57 145.938 91.2671 144.639 89.66 144.639C88.0529 144.639 86.75 145.938 86.75 147.541C86.75 149.144 88.0529 150.443 89.66 150.443Z" fill="#808080" />
               <path d="M133.04 150.443C134.647 150.443 135.95 149.144 135.95 147.541C135.95 145.938 134.647 144.639 133.04 144.639C131.433 144.639 130.13 145.938 130.13 147.541C130.13 149.144 131.433 150.443 133.04 150.443Z" fill="#808080" />
               <path d="M176.41 150.443C178.017 150.443 179.32 149.144 179.32 147.541C179.32 145.938 178.017 144.639 176.41 144.639C174.803 144.639 173.5 145.938 173.5 147.541C173.5 149.144 174.803 150.443 176.41 150.443Z" fill="#808080" />
               <path d="M2.91 186.6C4.51715 186.6 5.82 185.301 5.82 183.699C5.82 182.096 4.51715 180.797 2.91 180.797C1.30285 180.797 0 182.096 0 183.699C0 185.301 1.30285 186.6 2.91 186.6Z" fill="#808080" />
               <path d="M46.2801 186.6C47.8873 186.6 49.1901 185.301 49.1901 183.699C49.1901 182.096 47.8873 180.797 46.2801 180.797C44.673 180.797 43.3701 182.096 43.3701 183.699C43.3701 185.301 44.673 186.6 46.2801 186.6Z" fill="#808080" />
               <path d="M89.66 186.6C91.2671 186.6 92.57 185.301 92.57 183.699C92.57 182.096 91.2671 180.797 89.66 180.797C88.0529 180.797 86.75 182.096 86.75 183.699C86.75 185.301 88.0529 186.6 89.66 186.6Z" fill="#808080" />
               <path d="M133.04 186.6C134.647 186.6 135.95 185.301 135.95 183.699C135.95 182.096 134.647 180.797 133.04 180.797C131.433 180.797 130.13 182.096 130.13 183.699C130.13 185.301 131.433 186.6 133.04 186.6Z" fill="#808080" />
               <path d="M176.41 186.6C178.017 186.6 179.32 185.301 179.32 183.699C179.32 182.096 178.017 180.797 176.41 180.797C174.803 180.797 173.5 182.096 173.5 183.699C173.5 185.301 174.803 186.6 176.41 186.6Z" fill="#808080" />
            </svg>

         </main>
      </>
   )
}

export default Nav