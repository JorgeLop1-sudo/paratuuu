
        const images = [
            { src: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9db5/live/48fd9010-c1c1-11ee-9519-97453607d43e.jpg.webp" },
            { src: "https://img.freepik.com/vector-gratis/nina-feliz-mariposa_1450-103.jpg?semt=ais_hybrid&w=740&q=80" },
            { src: "https://images.pexels.com/photos/1526713/pexels-photo-1526713.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1526713.jpg&fm=jpg" },
            { src: "https://i.blogs.es/8256d5/gpu-openai-chatgpt/500_333.jpeg" },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVring1Y4Initgg49VAm4-7qdT4-UvU05Rww&s" },
            { src: "https://images.pexels.com/photos/8542167/pexels-photo-8542167.jpeg?auto=compress&cs=tinysrgb&h=300&w=300&fit=crop&crop=focalpoint&dpr=1" },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86S_ZlKylXOd3eTqAW5KXxkngeiP-uUxtNA&s" },
            { src: "https://img.imagenescool.com/ic/hola/hola_048.jpg" },
            { src: "https://www.shutterstock.com/image-vector/illustration-real-human-heart-600nw-2482198365.jpg" },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvt1WmeC3FsJqwJzWCiHrhr0FsvAKBVZBirA&s" },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s" },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UkMXPHdEzFV92XgBzgcqT0arRMMCGp8bQg&s" },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROFDbJFzBrDyZaCOzb4oa0G7UtuDAZFTr_Cw&s" },
            { src: "https://media.es.wired.com/photos/673e12c0eeb314108ec5cb27/1:1/w_2000,h_2000,c_limit/4%20imagenes%20del%20sol.jpg" },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvS8XRlRIzQ_lvu0EZy88MrE-UkMYfDTPjYQ&s" },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-aDkoxk4j_jIJh8E41nJAxg6WiM0e_2ipg&s" }
        ];

       
        function createImageElement(imageData) {
            const item = document.createElement('div');
            item.className = 'carousel-item';
            
            const img = document.createElement('img');
            img.src = imageData.src;
            img.alt = "";
            img.className = 'carousel-image';
            
            item.appendChild(img);
            
            return item;
        }

       
        function createMobileImageElement(imageData) {
            const container = document.createElement('div');
            container.className = 'mobile-image-container';
            
            const img = document.createElement('img');
            img.src = imageData.src;
            img.alt = "";
            img.className = 'mobile-carousel-image';
            
            container.appendChild(img);
            
            return container;
        }

       
        function createMobileRow(images) {
            const row = document.createElement('div');
            row.className = 'mobile-carousel-item';
            
            images.forEach(imageData => {
                row.appendChild(createMobileImageElement(imageData));
            });
            
            return row;
        }

   
        function initDesktopCarousels() {
            const leftTrack = document.getElementById('leftCarouselTrack');
            const rightTrack = document.getElementById('rightCarouselTrack');
            
           
            const half = Math.ceil(images.length / 2);
            const leftImages = images.slice(0, half);
            const rightImages = images.slice(half);
            
           
            leftImages.forEach(imageData => {
                leftTrack.appendChild(createImageElement(imageData));
            });
          
            rightImages.forEach(imageData => {
                rightTrack.appendChild(createImageElement(imageData));
            });
            
            
            leftImages.forEach(imageData => {
                leftTrack.appendChild(createImageElement(imageData));
            });
            
            rightImages.forEach(imageData => {
                rightTrack.appendChild(createImageElement(imageData));
            });
            
     
            animateDesktopCarousels();
        }

       
        function initMobileCarousels() {
            const topTrack = document.getElementById('mobileTrackTop');
            const bottomTrack = document.getElementById('mobileTrackBottom');
            
            for (let i = 0; i < images.length; i += 3) {
                const rowImages = images.slice(i, i + 3);
                if (rowImages.length > 0) {
                    topTrack.appendChild(createMobileRow(rowImages));
                }
            }
            
            for (let i = 0; i < images.length; i += 3) {
                const rowImages = images.slice(i, i + 3);
                if (rowImages.length > 0) {
                    bottomTrack.appendChild(createMobileRow(rowImages));
                }
            }
            
            const topRows = Array.from(topTrack.children);
            topRows.forEach(row => {
                const clone = row.cloneNode(true);
                topTrack.appendChild(clone);
            });
            
            const bottomRows = Array.from(bottomTrack.children);
            bottomRows.forEach(row => {
                const clone = row.cloneNode(true);
                bottomTrack.appendChild(clone);
            });
            
            animateMobileCarousels();
        }

        function animateDesktopCarousels() {
            const leftTrack = document.getElementById('leftCarouselTrack');
            const rightTrack = document.getElementById('rightCarouselTrack');
            
            const itemHeight = 170; 
            const trackHeight = (images.length / 2) * itemHeight;
            
            let leftPosition = 0;
            let rightPosition = 0;
            
            setInterval(() => {
                leftPosition -= 2;
                rightPosition -= 2;
                
                if (Math.abs(leftPosition) >= trackHeight) {
                    leftPosition = 0;
                }
                if (Math.abs(rightPosition) >= trackHeight) {
                    rightPosition = 0;
                }
                
                leftTrack.style.transform = `translateY(${leftPosition}px)`;
                rightTrack.style.transform = `translateY(${rightPosition}px)`;
            }, 30);
        }

        function animateMobileCarousels() {
            const topTrack = document.getElementById('mobileTrackTop');
            const bottomTrack = document.getElementById('mobileTrackBottom');
            
            const itemWidth = 500; 
            const trackWidth = (Math.ceil(images.length / 3)) * itemWidth;
            
            let topPosition = 0;
            let bottomPosition = 0;
            
            setInterval(() => {
                topPosition -= 2;
                bottomPosition -= 2;
                
                if (Math.abs(topPosition) >= trackWidth) {
                    topPosition = 0;
                    topTrack.style.transition = 'none';
                    topTrack.style.transform = `translateX(${topPosition}px)`;
                    void topTrack.offsetWidth;
                    topTrack.style.transition = 'transform 0.7s ease-in-out';
                }
                
                if (Math.abs(bottomPosition) >= trackWidth) {
                    bottomPosition = 0;
                    bottomTrack.style.transition = 'none';
                    bottomTrack.style.transform = `translateX(${bottomPosition}px)`;
                    void bottomTrack.offsetWidth;
                    bottomTrack.style.transition = 'transform 0.7s ease-in-out';
                }
                
                topTrack.style.transform = `translateX(${topPosition}px)`;
                bottomTrack.style.transform = `translateX(${bottomPosition}px)`;
            }, 30);
        }

        function initCarousels() {
            initDesktopCarousels();
            initMobileCarousels();
        }

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('password').value;
            const messageElement = document.getElementById('message');

            const correctPassword = "230825"; 
            
            if (password === correctPassword) {
                window.location.href = "menucito.html";
            } else {
                messageElement.textContent = "Contraseña incorrectaaaa. Inténta otra vez.👀";
                messageElement.className = "message error";
                messageElement.style.display = "block";
                
                document.getElementById('password').value = "";
                
                setTimeout(() => {
                    messageElement.style.display = "none";
                }, 3000);
            }
        });
        
        function createHearts() {
            const container = document.querySelector('.container');
            const heartsCount = 15;
            
            for (let i = 0; i < heartsCount; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = '❤';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                heart.style.animationDelay = Math.random() * 5 + 's';
                container.appendChild(heart);
            }
        }
   
        
        window.addEventListener('load', function() {
            createHearts();
            initCarousels();
        });