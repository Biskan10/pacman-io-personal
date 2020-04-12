var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
        	default: 'arcade',
        	arcade: {
        		debug: false
        	}
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);
    var map;
    var player;

    function preload ()
    {
    	this.load.image('background', 'assets/images/map.png');
    	this.load.image('coltiles', 'assets/images/coltiles.png');
    	this.load.image('maze', 'assets/images/maze.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/map.json');
        this.load.spritesheet('sprites', 'assets/images/sprites.png', {frameWidth: 32, frameHeight: 32});
        
    }

    function create ()
    {
    	this.add.image(14*16, 18*16, 'background');
    	map = this.make.tilemap({key: 'map'});
    	const tileset = map.addTilesetImage('coltiles');
    	var layer = map.createStaticLayer('CollisionLayer', tileset, 0, 0);
    	layer.setAlpha(0.5);
    	
    	spawnpoint = map.tileToWorldXY(13, 26);
    	
    	player = this.physics.add.sprite(spawnpoint.x, spawnpoint.y, 'sprites');
    	this.physics.addCollider(player, layer);
    	
    	
    }
    
    function update () 
    {
    	
    }