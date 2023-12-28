
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

 
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== PARALLAX ===============*/
let parallax = new Rellax('.parallax')

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__village', 1.2, {opacity: 0, y: 100, delay: .1})
gsap.from('.home__pine', 1.2, {opacity: 0, y: 150, delay: .3})
gsap.from('.home__mountain-2', 1.2, {opacity: 0, x: 150, delay: .5})
gsap.from('.home__mountain-3', 1.2, {opacity: 0, x: -150, delay: .6})
gsap.from('.home__mountain-1', 1.2, {opacity: 0, y: 250, delay: .7})
gsap.from('.home__moon', 1.2, {opacity: 0, y: 200, delay: .8})
var animation1 = gsap.from('.home__trineo', 1.2, {opacity: 0, x: -500, delay: .9});
var animation2 = gsap.to('.home__trineo', 1, {y: -20, yoyo: true, repeat: -1});
gsap.from('.home__title', 1.2, {opacity: 0, x: -60, delay: 1})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.about__data, .celebrate__img', {origin: 'right'})
sr.reveal('.about__img, .celebrate__data', {origin: 'left'})
sr.reveal('.send__card', {interval: 100})
sr.reveal('.footer')

/*================== Celebrate ===============*/

function toggleLights() {
    const lights = document.querySelectorAll('.light');
    lights.forEach(light => {
      light.classList.toggle('on');
    });
}
  let isGiftFormVisible = false;
  let productLink = '';
  function celebrate() {
      const giftForm = document.getElementById('gift-form');
      const giftResult = document.getElementById('gift-result');
      const genderDropdown = document.getElementById('gender');
      genderDropdown.value = 'select';
      // Toggle the visibility of the gift form
      isGiftFormVisible = !isGiftFormVisible;

      if (isGiftFormVisible) {
          // Show the gift form
          giftForm.style.display = 'block';
          giftResult.style.display = 'none'; // Hide the gift result if it was open

        } 
  }
  
  function cancelCelebration() {
    const giftForm = document.getElementById('gift-form');
    const giftResult = document.getElementById('gift-result');

    // Hide the gift form
    giftForm.style.display = 'none';

    // Reset the form fields (optional)
    document.getElementById('gender').value = 'male';
    document.getElementById('age').value = '';

    // Hide the gift result if it was open
    giftResult.style.display = 'none';

    // Reset the isGiftFormVisible flag
    isGiftFormVisible = false;
}



  function getGiftSuggestions() {
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const giftTextElement = document.getElementById('gift-text');
    const giftImageElement = document.getElementById('gift-image');
    const giftResultElement = document.getElementById('gift-result'); 
    const giftBuyElement = document.getElementById('close-button');   

    giftTextElement.style.color = ''; // Reset text color
    giftImageElement.style.display = 'block'; // Reset image display
    giftResultElement.style.display = 'none';

    let giftText = '';
    let giftImageSrc = '';
    
  
    // Your logic for gift suggestions based on age and gender
    
    if (gender === 'male') {
        if (age > 0 && age < 12) {
            giftText = "Here's a Gift suggestion for a boy!";
            const boyImages = [
                'assets/img/gift_boy.jpg',
                'assets/img/boy_1.jpg',
                'assets/img/boy_2.jpg',
                'assets/img/boy_3.jpg',
                'assets/img/boy_4.jpg'
            ];
            const boyLink = [
                'https://www.amazon.in/WireScorts-Rechargable-Remote-Control-Speed/dp/B0CCZBFQK8/?_encoding=UTF8&pd_rd_w=6mQqd&content-id=amzn1.sym.b5a625fa-e3eb-4301-a9e2-f9c8b3e7badf%3Aamzn1.symc.36bd837a-d66d-47d1-8457-ffe9a9f3ddab&pf_rd_p=b5a625fa-e3eb-4301-a9e2-f9c8b3e7badf&pf_rd_r=0ARFW8X0JX6X7V58SE51&pd_rd_wg=PQn5I&pd_rd_r=e2611d7d-239a-46d3-911a-1b9fe388dd2c&ref_=pd_gw_ci_mcx_mr_hp_atf_m&th=1',
                'https://www.amazon.in/ABLE-Spider-Printed-School-Kids-Ideal/dp/B0BCWZ88TT/ref=sr_1_41?crid=3PEHKNP8DI4JU&keywords=bags%2Bfor%2B10%2Byear%2Bold%2Bboys&qid=1703712687&sprefix=bags%2Bfor%2B10%2Byear%2Bold%2Bboys%2Caps%2C268&sr=8-41&th=1&psc=1',
                'https://www.amazon.in/Kiddie-Galaxia%C2%AE-Dinosaur-Dinosaurs-Screwdrivers/dp/B0CPPPGYKN/ref=sr_1_8?crid=3NMCYM144WF3R&keywords=dinosaur+toys+for+boys&qid=1703685773&sprefix=dinosaur+toys+for+b%2Caps%2C287&sr=8-8',
                'https://www.amazon.in/Hot-Wheels-Batman-Multi-Color/dp/B0BYP1QL8L/ref=sr_1_1?crid=26EHK6G7U7LVW&keywords=cars+for+boys+10+years+hot+wheels&qid=1703686028&sprefix=cars+for+boys+10+years+hot+wheels%2Caps%2C274&sr=8-1',
                'https://www.amazon.in/LEGO-Creator-Shuttle-31134-Building/dp/B0BBRYHTPS/ref=sr_1_54?crid=2MCR3UJ0TT5S2&keywords=11+years+boys+gifts&qid=1703686098&sprefix=11+years+boys+gifts%2Caps%2C308&sr=8-54'  
                 
            ];
            // Randomly select an image source
            const randomIndex = Math.floor(Math.random() * boyImages.length);
            giftImageSrc = boyImages[randomIndex];
            giftBuyElement.style.display = 'block'; 
            productLink= boyLink[randomIndex];
        } else if (age >= 12 && age < 25) {
            giftText = "Here's a Gift suggestion for a young man!";
            const ladImages = [
                'assets/img/gift_lad.jpg',
                'assets/img/lad_1.jpg',
                'assets/img/lad_2.jpg',
                'assets/img/lad_3.jpg',
                'assets/img/lad_4.jpg'
            ];
            const ladLink = [
                'https://www.amazon.in/dp/B09N3XMZ5F/ref=twister_B0CMCX2WZ1?_encoding=UTF8&th=1',
                'https://www.amazon.in/PAPIO-Color-Digital-Unisex-DIGITAL-21/dp/B0CK1FHVMZ/ref=sr_1_22_sspa?keywords=watches+for+boys&qid=1703686445&sr=8-22-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1',
                'https://www.amazon.in/dp/B08VGMBLQW/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=AT95IG9ONZD7S&pf_rd_s=merchandised-search-7&pf_rd_r=B3PS08XFGTSZN17076XJ&pf_rd_t=101&pf_rd_p=de78a4bc-ae99-415a-90ca-ea3fdaea2df4&pf_rd_i=28244721031',
                'https://www.amazon.in/Red-Tape-Cushioned-Slip-Resistance-Absorption/dp/B0C6F1BJ49/ref=sr_1_13?crid=249P3E71BTVV0&dib=eyJ2IjoiMSJ9.rggyArwSHQn-UaYnKUwr_z7IBWIIS6fejfDKgfIw2loIjYhqjLTHoVe7tntzuzxsYZNkDpLVSZLR-oqblHG5LA.jQT5d3EISlcyLrPXjSZLCOGqfUPyUA8A3s2TBVPTS6A&dib_tag=se&keywords=shoes%2Bfor%2Bmen%2Bsneakers&qid=1703699969&sprefix=shoes%2Caps%2C310&sr=8-13&th=1&psc=1',
                'https://www.amazon.in/ComicSense-xyz-Revengers-Oversized-Pattern-Shoulder/dp/B09JPBY9TV/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.3e281033-6906-4707-ac94-aef585daf496%3Aamzn1.sym.3e281033-6906-4707-ac94-aef585daf496&cv_ct_cx=oversized%2Btshirt%2Bfor%2Bmen&dib=eyJ2IjoiMSJ9.pPHzN7yxW8TilikkVB0dSciUJkMh8ofED4tNi_e14vd5IgurUvaJ01clNyibuM86ONnncfR0qIbef23jHETbVA.ljQ4LZoR-1yCfZP3s-qaIZ2U0yOKouWEV0EVplI3LlQ&dib_tag=se&keywords=oversized%2Btshirt%2Bfor%2Bmen&pd_rd_i=B09JPBY9TV&pd_rd_r=2430ed04-88c6-45b8-97e2-97a65d94523c&pd_rd_w=SKZ2A&pd_rd_wg=VynAc&pf_rd_p=3e281033-6906-4707-ac94-aef585daf496&pf_rd_r=JHX377N5RJA5KSMYN96B&qid=1703700277&refinements=p_72%3A1318476031&rnid=1318475031&s=apparel&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-4-ced4eeeb-b190-41d6-902a-1ecb3fb8b7c4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&psc=1'
            ];
            // Randomly select an image source
            const randomIndex = Math.floor(Math.random() * ladImages.length);
            giftImageSrc = ladImages[randomIndex]; 
            giftBuyElement.style.display = 'block';
            productLink= ladLink[randomIndex];   
        } else if (age >= 25 && age < 41) {
            giftText = "Here's a Gift suggestion for a man in his prime!";
            const manImages = [
                'assets/img/man_1.jpg',
                'assets/img/man_2.jpg',
                'assets/img/man_3.jpg',
                'assets/img/man_4.jpg',
                'assets/img/man_5.jpg'
            ];
            const manLink = [
                'https://www.amazon.in/boAt-Airdopes-141-ANC-BeastMode/dp/B0C7QH7L36/ref=sr_1_5?keywords=airpods&qid=1703686849&sr=8-5&th=1',
                'https://www.amazon.in/Park-Avenue-Voyage-Amazon-Perfume/dp/B084V46KGT/ref=sr_1_10?crid=2P3K20MY11ZER&keywords=perfume+for+men&qid=1703686991&sprefix=perfume+for+men%2Caps%2C326&sr=8-10',
                'https://www.amazon.in/NAPA-HIDE-Handcrafted-Currency-Compartments/dp/B083TJBKCQ/ref=sr_1_8?crid=5AGZIRCXBVXG&keywords=purse+for+men&qid=1703687038&sprefix=purse+for+men%2Caps%2C272&sr=8-8',
                'https://www.amazon.in/Business-Stainless-Decorative-Resistant-Waterproof/dp/B07HP1C5GK/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.3e281033-6906-4707-ac94-aef585daf496%3Aamzn1.sym.3e281033-6906-4707-ac94-aef585daf496&crid=2SZEUJ4FIPFRX&cv_ct_cx=watches+for+men&keywords=watches+for+men&pd_rd_i=B07HP1C5GK&pd_rd_r=7aabe681-0baf-488b-9734-fe48bb3adac8&pd_rd_w=AOe4b&pd_rd_wg=lHxMr&pf_rd_p=3e281033-6906-4707-ac94-aef585daf496&pf_rd_r=59P39VK8EFPSB8MS0H14&qid=1703687078&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=watches%2Caps%2C288&sr=1-1-ced4eeeb-b190-41d6-902a-1ecb3fb8b7c4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1',
                'https://www.amazon.in/Philips-Battery-Powered-SkinProtect-Trimmer/dp/B0BXNVPRGS/ref=sr_1_5?crid=3BGZXUGJNZ9XU&keywords=trimmer+men&qid=1703687175&sprefix=trimmer%2Caps%2C293&sr=8-5 '
            ];
            // Randomly select an image source
            const randomIndex = Math.floor(Math.random() * manImages.length);
            giftImageSrc = manImages[randomIndex];
            giftBuyElement.style.display = 'block';
            productLink= manLink[randomIndex];
        } else if (age >= 41 && age < 101) {
            giftText = "Here's a Gift suggestion for an older man!";
            const oldmanImages = [
                'assets/img/older_man_0.jpg',
                'assets/img/older_man_1.jpg',
                'assets/img/older_man_2.jpg',
                'assets/img/older_man_3.jpg',
                'assets/img/older_man_5.jpg'
            ];
            const oldmanLink=[
                'https://www.amazon.in/Titan-Karishma-Analog-Silver-Watch-1824BM01/dp/B07SM757CK/ref=pd_ybh_a_sccl_20/258-8219647-2798825?pd_rd_w=NZONR&content-id=amzn1.sym.f8d8b87f-14aa-4c03-ad0d-380a0108b532&pf_rd_p=f8d8b87f-14aa-4c03-ad0d-380a0108b532&pf_rd_r=S5FNQ606QNE4W8Z8P4JT&pd_rd_wg=EBXTg&pd_rd_r=3e2953c4-afd8-4d2d-8fcf-44187eca5b08&pd_rd_i=B07SM757CK&psc=1',
                'https://www.amazon.in/Coffee-Stylish-Printed-Transparent-Occasion/dp/B08X1H93HS/ref=sr_1_18?crid=7DMSMFHJ6GGE&keywords=coffee+mug+for+men&qid=1703711344&sprefix=coffee+mug+for+men%2Caps%2C280&sr=8-18',
                'https://www.amazon.in/URBAN-FOREST-Leather-Wallet-Keyring/dp/B07T8YF4MS/ref=sr_1_2?crid=2LH5CZF2L9U6V&keywords=gift+for+80+year+old+man&qid=1703687223&sprefix=old+man+gi%2Caps%2C302&sr=8-2',
                'https://www.amazon.in/Parker-Classic-Gold-Ball-Pen/dp/B00LM4W1N2/ref=sr_1_56?crid=3C6W52186CR7Z&keywords=old+man+gifts&qid=1703687343&sprefix=old+man+gifts%2Caps%2C277&sr=8-56',
                'https://www.amazon.in/Bata-Mens-Tan-Loafers-851-4790-42/dp/B078Y6H2QF/ref=lp_90239924031_1_4?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=AENV5SYWFY7RDPZV4RZN&th=1&psc=1'
            ];
            // Randomly select an image source
            const randomIndex = Math.floor(Math.random() * oldmanImages.length);
            giftImageSrc = oldmanImages[randomIndex];
            giftBuyElement.style.display = 'block';
            productLink= oldmanLink[randomIndex];
        } else {
            giftText = "Enter the age properly!";
            giftTextElement.style.color = 'red';
            giftImageSrc = '';
            // Hide the image element
            giftImageElement.style.display = 'none';
            giftBuyElement.style.display = 'none';
        }
    } else if (gender === 'female') {
        if (age > 0 && age < 12) {
            giftText = "Here's a Gift suggestion for a girl!";
            const girlImages = [
                'assets/img/gift_girl.jpg',
                'assets/img/girl_1.jpg',
                'assets/img/girl_2.jpg',
                'assets/img/girl_3.jpg',
                'assets/img/girl_5.jpg'
            ];
            const girlLink=[
                'https://www.amazon.in/Barbie-Movie-Wearing-Gingham-Necklace/dp/B0BHFG4756/ref=pd_ybh_a_sccl_35/258-8219647-2798825?pd_rd_w=NZONR&content-id=amzn1.sym.f8d8b87f-14aa-4c03-ad0d-380a0108b532&pf_rd_p=f8d8b87f-14aa-4c03-ad0d-380a0108b532&pf_rd_r=S5FNQ606QNE4W8Z8P4JT&pd_rd_wg=EBXTg&pd_rd_r=3e2953c4-afd8-4d2d-8fcf-44187eca5b08&pd_rd_i=B0BHFG4756&psc=1',
                'https://www.amazon.in/Winter-Coloring-Lovers-Christmas-Theme/dp/B09KDL4PZ6/ref=sr_1_9?crid=1MSM953NUVAUO&keywords=girls+0-11+gifts&qid=1703683196&sprefix=girls+0-11+gifts%2Caps%2C483&sr=8-9',
                'https://www.amazon.in/Peppa-Playhouse-Tent-Girls-Boys/dp/B08VJ58YT9/ref=sr_1_14?crid=QHYK2YTPVUTL&keywords=kids%2Bgirl%2B0-11%2Bplay%2Bset&qid=1703683441&sprefix=kids%2Bgirl%2B0-11%2Bplay%2Bset%2Caps%2C277&sr=8-14&th=1',
                'https://www.amazon.in/Cable-World-Portable-Cooking-Kitchen/dp/B09GLWWC4Z/ref=sr_1_10?crid=15U36LID3S2R1&keywords=kids+girl+0-11+kitchen+play+set&qid=1703683511&sprefix=kids+girl+0-11+kitchen+play+set%2Caps%2C300&sr=8-10 ',
                'https://www.amazon.in/Future-Elegant-Elephant-Penguin-Setting/dp/B0964B9937/ref=sr_1_49?crid=1MKDHJ9HFY1DO&keywords=teddy+bears+for+kids&qid=1703684379&sprefix=teddy+bears+for+kids%2Caps%2C294&sr=8-49'
            ];
            // Randomly select an image source
            const randomIndex = Math.floor(Math.random() * girlImages.length);
            giftImageSrc = girlImages[randomIndex];
            giftBuyElement.style.display = 'block';
            productLink= girlLink[randomIndex];
        } else if (age >= 12 && age < 25) {
            giftText = "Here's a Gift suggestion for a young lady!";
            const ladyImages = [
                'assets/img/gift_lady1.jpg',
                'assets/img/gift_lady2.jpg',
                'assets/img/gift_lady3.jpg',
                'assets/img/gift_lady4.jpg',
                'assets/img/lady_5.jpg'
            ];
            const ladyLink=[
                'https://www.amazon.in/Fashfun-Womens-Bootcut-X-Large-FSH-COORD-AG-1-Q1-XL/dp/B0BN374NK1/ref=pd_ybh_a_sccl_17/258-8219647-2798825?pd_rd_w=NZONR&content-id=amzn1.sym.f8d8b87f-14aa-4c03-ad0d-380a0108b532&pf_rd_p=f8d8b87f-14aa-4c03-ad0d-380a0108b532&pf_rd_r=S5FNQ606QNE4W8Z8P4JT&pd_rd_wg=EBXTg&pd_rd_r=3e2953c4-afd8-4d2d-8fcf-44187eca5b08&pd_rd_i=B0BN374NK1&th=1&psc=1',
                'https://www.amazon.in/Engage-Verona-Perfume-Lasting-Everyday/dp/B0BCK63V3T/ref=pd_ybh_a_sccl_13/258-8219647-2798825?pd_rd_w=NZONR&content-id=amzn1.sym.f8d8b87f-14aa-4c03-ad0d-380a0108b532&pf_rd_p=f8d8b87f-14aa-4c03-ad0d-380a0108b532&pf_rd_r=S5FNQ606QNE4W8Z8P4JT&pd_rd_wg=EBXTg&pd_rd_r=3e2953c4-afd8-4d2d-8fcf-44187eca5b08&pd_rd_i=B0BCK63V3T&psc=1',
                'https://www.amazon.in/LOUIS-DEVIN-Plated-Analog-LD-RG162-BLU/dp/B0BQRNY6FM/ref=pd_ybh_a_sccl_8/258-8219647-2798825?pd_rd_w=NZONR&content-id=amzn1.sym.f8d8b87f-14aa-4c03-ad0d-380a0108b532&pf_rd_p=f8d8b87f-14aa-4c03-ad0d-380a0108b532&pf_rd_r=S5FNQ606QNE4W8Z8P4JT&pd_rd_wg=EBXTg&pd_rd_r=3e2953c4-afd8-4d2d-8fcf-44187eca5b08&pd_rd_i=B0BQRNY6FM&th=1',
                'https://www.amazon.in/Maybelline-Color-Sensational-Creamy-Divine/dp/B00OLPDKB6/ref=pd_ybh_a_sccl_9/258-8219647-2798825?pd_rd_w=NZONR&content-id=amzn1.sym.f8d8b87f-14aa-4c03-ad0d-380a0108b532&pf_rd_p=f8d8b87f-14aa-4c03-ad0d-380a0108b532&pf_rd_r=S5FNQ606QNE4W8Z8P4JT&pd_rd_wg=EBXTg&pd_rd_r=3e2953c4-afd8-4d2d-8fcf-44187eca5b08&pd_rd_i=B00OLPDKB6&th=1',
                'https://www.amazon.in/ROSS-BROWN-Synthetic-Leather-Satchel/dp/B0C97H56RF/ref=sr_1_5?crid=3IM0R1M8FYIKK&keywords=purse+women&qid=1703683979&sprefix=puse%2Caps%2C324&sr=8-5'
            ];
            // Randomly select an image source
            const randomIndex = Math.floor(Math.random() * ladyImages.length);
            giftImageSrc = ladyImages[randomIndex];
            giftBuyElement.style.display = 'block';
            productLink= ladyLink[randomIndex];
        } else if (age >= 25 && age < 46) {
            giftText = "Here's a Gift suggestion for a woman in her prime!";
            const womanImages = [
                'assets/img/gift_woman.jpg',
                'assets/img/woman_1.jpg',
                'assets/img/woman_3.jpg',
                'assets/img/woman_4.jpg',
                'assets/img/woman_5.jpg'
            ];
            const womanLink=[
                'https://www.amazon.in/GIVA-Sterling-Necklace-Certificate-Authenticity/dp/B0BBW4NTCH/ref=pd_ybh_a_sccl_24/258-8219647-2798825?pd_rd_w=NZONR&content-id=amzn1.sym.f8d8b87f-14aa-4c03-ad0d-380a0108b532&pf_rd_p=f8d8b87f-14aa-4c03-ad0d-380a0108b532&pf_rd_r=S5FNQ606QNE4W8Z8P4JT&pd_rd_wg=EBXTg&pd_rd_r=3e2953c4-afd8-4d2d-8fcf-44187eca5b08&pd_rd_i=B0BBW4NTCH&psc=1',
                'https://www.amazon.in/Exotic-Dualtone-Women-Sling-Blue/dp/B09F6GD444/ref=sr_1_38?crid=3FQ4Z48TJ6R32&keywords=purse+women+handbag&qid=1703684041&sprefix=purse+women%2Caps%2C831&sr=8-38 ',
                'https://www.amazon.in/Blue-Heaven-Festive-Combo-Multicolor/dp/B09HSQ15DZ/ref=sr_1_5?crid=VLCXI0ACEUHN&keywords=makeup+kit+for+women&qid=1703684298&sprefix=makeup%2Caps%2C303&sr=8-5',
                'https://www.amazon.in/Bella-Vita-Organic-Perfumes-Fragrance/dp/B09232XNTX/ref=sr_1_1_sspa?crid=1PTZC0WJ1LNSI&keywords=perfume+for+women&qid=1703684524&sprefix=perfume%2Caps%2C372&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1 ',
                'https://www.amazon.in/FLORA-Slingback-Kitten-Heels-Fashionable/dp/B0CQ8H5YRG/ref=sr_1_25?crid=1JNOPF2IQFL6Q&keywords=dress%2Bfor%2Blady&qid=1703684641&sprefix=dress%2Bforlady%2Caps%2C331&sr=8-25&th=1&psc=1'
            ];
            // Randomly select an image source
            const randomIndex = Math.floor(Math.random() * womanImages.length);
            giftImageSrc = womanImages[randomIndex];
            giftBuyElement.style.display = 'block';
            productLink= womanLink[randomIndex];
        } else if (age >= 46 && age < 101) {
            giftText = "Here's a Gift suggestion for an older woman!";
            const oldwomanImages = [
                'assets/img/gift_older_woman.jpg',
                'assets/img/older_woman_1.jpg',
                'assets/img/older_woman_2.jpg',
                'assets/img/older_woman_3.jpg',
                'assets/img/older_woman_4.jpg'
            ];
            const oldwomanLink=[
                'https://www.amazon.in/MOCA-Womens-wallet-Mobile-Crossbody/dp/B0BCG678CJ/ref=pd_ybh_a_sccl_18/258-8219647-2798825?pd_rd_w=NZONR&content-id=amzn1.sym.f8d8b87f-14aa-4c03-ad0d-380a0108b532&pf_rd_p=f8d8b87f-14aa-4c03-ad0d-380a0108b532&pf_rd_r=S5FNQ606QNE4W8Z8P4JT&pd_rd_wg=EBXTg&pd_rd_r=3e2953c4-afd8-4d2d-8fcf-44187eca5b08&pd_rd_i=B0BCG678CJ&psc=1',
                'https://www.amazon.in/Nyassa-Bath-Treat-Wooden-7Pcs/dp/B07FKQ9W5L/ref=sr_1_13?crid=23RHAR1IA6RZM&keywords=elderly+women+gifts&qid=1703684775&sprefix=elderly+women+gifts%2Caps%2C292&sr=8-13',
                'https://www.amazon.in/JFL-Solitaire-Diamond-Designer-Delicate/dp/B08549B2YQ/ref=sr_1_15?crid=L6WLLDS4O40G&keywords=simple+pendant+for+old+women&qid=1703685117&sprefix=simple+pendant+for+old+women%2Caps%2C280&sr=8-15',
                'https://www.amazon.in/WEAVING-HOMES-White-Green-Coffee/dp/B0BYWFX6SX/ref=sr_1_57_sspa?crid=3LLDVCUFVVZUB&keywords=coffee+cups+for+old+woman&qid=1703685313&sprefix=coffee+cups+for+old+woman%2Caps%2C279&sr=8-57-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9idGY&psc=1',
                'https://www.amazon.in/tweedle-Stylish-Acrylic-Geometric-Weather/dp/B0CQCXRM97/ref=sr_1_47_sspa?crid=1CTMOCIYUAQ66&keywords=shawls+and+scarves+women+aged&qid=1703685583&sprefix=shawls+and+scarfs+women+age%2Caps%2C269&sr=8-47-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9idGY&psc=1'
            ];
            // Randomly select an image source
            const randomIndex = Math.floor(Math.random() * oldwomanImages.length);
            giftImageSrc = oldwomanImages[randomIndex];
            giftBuyElement.style.display = 'block';
            productLink= oldwomanLink[randomIndex];
        } else {
            giftText = "Enter the age properly!";
            giftTextElement.style.color = 'red';
            giftImageSrc = '';
            // Hide the image element
            giftImageElement.style.display = 'none';
            giftBuyElement.style.display = 'none';
        }
    } else {
        // Handle other genders here if needed
        giftText = "Please Select a Gender First!!!";
        giftTextElement.style.color = 'red';
        giftImageSrc = '';
            // Hide the image element
        giftImageElement.style.display = 'none';
        giftBuyElement.style.display = 'none';
        
    }
    
  
    // Display the results
    giftTextElement.textContent = giftText;
    // Set the image source
    giftImageElement.src = giftImageSrc;

    // Display the result element only if there is either a text message or an image to show
    if (giftText || giftImageSrc) {
        giftResultElement.style.display = 'block';
    } else {
        giftResultElement.style.display = 'none';
    }
    
    
  }

  function buyGiftResult() {
    
    if (productLink) {
        window.open(productLink, '_blank');
    }
}
    
/*============= Music Player ================*/
const container = document.getElementById('container');
const celebrateButton = document.getElementById('celebrateNow');
const musicPlayer = document.getElementById('musicPlayer');
const songList = document.getElementById('songList');
const song1 = document.getElementById('song1');
const song2 = document.getElementById('song2');
const song3 = document.getElementById('song3');
const song4 = document.getElementById('song4');
const song5 = document.getElementById('song5');
const song1_img = document.getElementById('song1_img');
const song2_img = document.getElementById('song2_img');
const song3_img = document.getElementById('song3_img');
const song4_img = document.getElementById('song4_img');
const song5_img = document.getElementById('song5_img');
const songs = [song1, song2, song3, song4, song5];
const songImg = [song1_img, song2_img, song3_img, song4_img, song5_img];
const hideRevealButton = document.getElementById('hideRevealButton');
const eyeIcon = document.getElementById('eyeIcon');


let isMusicPlaying = false;
let currentSongIndex = 0;
let index=0;
celebrateButton.addEventListener('click', () => {
    if (!isMusicPlaying) {
        showSongList();
    } else {
        stopMusic();
    }
});



function showSongList() {
    container.style.display='block';
    songList.style.display = 'block';
    hideRevealButton.style.display = 'block';
    eyeIcon.classList.add('ri-eye-off-fill');
    celebrateButton.innerText = 'Stop Music';
    isMusicPlaying = true;
    playSelectedSong(currentSongIndex);
}

function toggleVisibility() {
    
    if (songList.style.display === 'none') {
        songList.style.display = 'block';
        eyeIcon.classList.remove('ri-eye-fill');
        eyeIcon.classList.add('ri-eye-off-fill');
        hideRevealButton.style.backgroundColor = '#4CAF50';
    } else {
        songList.style.display = 'none';
        eyeIcon.classList.remove('ri-eye-off-fill');
        eyeIcon.classList.add('ri-eye-fill');
        hideRevealButton.style.backgroundColor = '#BB2528';
    }
}

function playSelectedSong(index) {
    //const songs = [song1, song2, song3, song4, song5];
    const songSrc = songs[index].getAttribute('data-src');
    

    // Remove the 'selected' class from all list items
    songs.forEach(item => {
        item.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked list item
    songs[index].classList.add('selected');
    
    songImg.forEach(img => {
        img.style.display = 'none';
    });

    songImg[index].style.display='block'
    musicPlayer.innerHTML = `<audio controls autoplay onended="playNextSong()"><source src="${songSrc}" type="audio/mp3">Your browser does not support the audio tag.</audio>`;
    musicPlayer.style.display = 'block';

}

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    
    playSelectedSong(currentSongIndex);
}

function stopMusic() {
    musicPlayer.innerHTML = '';
    musicPlayer.style.display = 'none';
    songList.style.display = 'none';
    hideRevealButton.style.display = 'none';
    container.style.display  = 'none';
    celebrateButton.innerText = 'Celebrate Now';
    isMusicPlaying = false;

    // Remove the 'selected' class from all list items
    const songs = [song1, song2, song3, song4, song5];
    songs.forEach(item => {
        item.classList.remove('selected');
    });
    currentSongIndex = 0;
    songImg[0].style.display='none';
    songImg[1].style.display='none';
    songImg[2].style.display='none';
    songImg[3].style.display='none';
    songImg[4].style.display='none';
}

song1.addEventListener('click', () => {
    songImg[1].style.display='none';
    songImg[2].style.display='none';
    songImg[3].style.display='none';
    songImg[4].style.display='none';
    currentSongIndex = -1;
    playSelectedSong(0);
    playNextSong();
    isMusicPlaying = true;
        
    
});
song2.addEventListener('click', () => {
    songImg[0].style.display='none';
    songImg[2].style.display='none';
    songImg[3].style.display='none';
    songImg[4].style.display='none';
    currentSongIndex = 0;
    playSelectedSong(1);
    playNextSong();
    isMusicPlaying = true;
    

});
song3.addEventListener('click', () => {
    songImg[1].style.display='none';
    songImg[0].style.display='none';
    songImg[3].style.display='none';
    songImg[4].style.display='none';
    currentSongIndex = 1;
    playSelectedSong(2);
    playNextSong();
    isMusicPlaying = true;

});
song4.addEventListener('click', () => {
    songImg[1].style.display='none';
    songImg[2].style.display='none';
    songImg[0].style.display='none';
    songImg[4].style.display='none';
    currentSongIndex = 2;
    playSelectedSong(3);
    playNextSong();
    isMusicPlaying = true;

});
song5.addEventListener('click', () => {
    songImg[1].style.display='none';
    songImg[2].style.display='none';
    songImg[3].style.display='none';
    songImg[0].style.display='none';
    currentSongIndex = 3;
    playSelectedSong(4);
    playNextSong();
    isMusicPlaying = true;

});