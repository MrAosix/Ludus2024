class Accueil extends Phaser.Scene {
  constructor() {
    super({ key: 'accueil' });
  }

  preload() {
    // Load les images
    this.load.image("bg", "./assets/images/backgrounds/background.png");
    this.load.image("logo", "./assets/images/backgrounds/logo.png");
    this.load.image("forest_bg", "./assets/images/backgrounds/Green-tree.png")
    this.load.image("ui", "./assets/images/ui/base-01.png")
    this.load.image("buttonCommencer", "./assets/images/ui/boutonCommencer.png")
    this.load.image("buttonCredit", "./assets/images/ui/boutonCredit.png")
    this.load.image("buttonTutoriel", "./assets/images/ui/boutonTutoriel.png")
    this.load.image("audioOn", "./assets/images/ui/audio-on.png")
    this.load.image("buttonQuitter", "./assets/images/ui/boutonQuitter.png")
    this.load.image("buttonRetour", "./assets/images/ui/boutonRetour.png")
    this.load.image("buttonRecommencer", "./assets/images/ui/boutonRecommencer.png")
    this.load.image("buttonMenuPrincipal", "./assets/images/ui/boutonMenuPrincipal.png")
    
  }

  create() {
    // Background Nuage
    let img = this.add.image(config.width / 2, config.height / 2, "bg");
    let scaleX = config.width / img.width;
    let scaleY = config.height / img.height;
    let scale = Math.max(scaleX, scaleY);
    img.setScale(scale);

    // Création du container HUD
    const hudContainer = this.add.container(0,0);

    // Créé le logo et le met dans le container HUD
    const logo = this.add.image(0,0, "logo").setPosition(config.width / 2, 400).setScale(0.7).setDepth(1);
    hudContainer.add(logo)

    // Créé les boutons et les mettres dans le container
    let buttonCommencer = this.add.image(config.width * 1/2, 750, "buttonCommencer")
    let buttonCredit = this.add.image(config.width * 3/4, 750, "buttonCredit")
    let buttonTutoriel = this.add.image(config.width * 1/4, 750, "buttonTutoriel")
    let audio = this.add.image(0,0, "audioOn").setScale(5).setPosition(config.width - 10,10).setOrigin(1,0);
    hudContainer.add(buttonCommencer,buttonCredit,buttonTutoriel,audio)

    // rendre les boutons interactifs
    buttonCommencer.setInteractive();
    buttonCredit.setInteractive();
    buttonTutoriel.setInteractive();
    audio.setInteractive();
    buttonCommencer.on('pointerdown', () => {
      this.scene.start("jeu");
    });
    buttonCredit.on('pointerdown', () => {
      this.scene.start("credits");
    });
    buttonTutoriel.on('pointerdown', () => {
      this.scene.start("tutoriel");
    });

    /* let forest_bg = this.add.image(0,0, "forest_bg").setCrop(222,380,120,330).setOrigin(0,0).setScale(3).setPosition(-390,-900);

    let forest_bg2 = this.add.image(0,0, "forest_bg").setCrop(0,380,110,340).setOrigin(0,0).setScale(3.5).setPosition(100,-1000);

    let forest_bg3 = this.add.image(0,0, "forest_bg").setCrop(0,380,110,340).setOrigin(0,0).setScale(3.9).setPosition(360,-1400); */


  }

  update() {}
  
}
