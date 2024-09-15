class Credits extends Phaser.Scene {
  constructor() {
    super({ key: 'credits' });
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
    let buttonRetour = this.add.image(config.width * 1/2, config.height * 1/2, "buttonRetour")

    // rendre les boutons interactifs
    buttonRetour.setInteractive();
    buttonRetour.on('pointerdown', () => {
      this.scene.start("accueil");
    });
  }

  update() {
  }
}