class PartieTerminee extends Phaser.Scene {
  constructor() {
    super({ key: 'partieTerminee' });
  }

  preload() {
  }

  create() {
    // Background Nuage
    let img = this.add.image(config.width / 2, config.height / 2, "bg");
    let scaleX = config.width / img.width;
    let scaleY = config.height / img.height;
    let scale = Math.max(scaleX, scaleY);
    img.setScale(scale);

    // Créé les boutons
    let buttonRecommencer = this.add.image(config.width * 1/2, config.height * 1/3, "buttonRecommencer")
    let buttonMenuPrincipal = this.add.image(config.width * 1/2, config.height * 2/3, "buttonMenuPrincipal")

    // rendre les boutons interactifs
    buttonRecommencer.setInteractive();
    buttonMenuPrincipal.setInteractive();
    buttonRecommencer.on('pointerdown', () => {
      this.scene.start("jeu");
    });
    buttonMenuPrincipal.on('pointerdown', () => {
    this.scene.start("accueil");
    });
  }

  update() {
  }
}