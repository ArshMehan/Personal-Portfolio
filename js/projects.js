const projects = [
    { 
        id: 'decode-v2', 
        title: 'Decode Robot V2', 
        tag: 'Optimization', 
        img: 'Pictures/decode auto.gif', 
        desc: 'Mass centralization study prioritizing lower center of gravity.', 
        tech: '• 8-motor internal housing\n• Low-profile clearance geometry.', 
        link: null 
    },
    { 
        id: 'decode-v1', 
        title: 'Decode Robot V1', 
        tag: 'Modular Design', 
        img: 'Pictures/Screenshot 2026-04-20 224836.png', 
        desc: 'Modular architecture for rapid assembly and field service.', 
        tech: '• Subsystem removal via 8 screws\n• Dual-intake integration.', 
        link: null 
    },
    { 
        id: 'spur-pto', 
        title: 'Spur Differential PTO', 
        tag: 'Applied Mechanics', 
        img: 'Pictures/Screenshot 2026-04-20 224208.png', 
        desc: 'Technical analysis of power take-off systems.', 
        tech: '• Precision dowel use\n• Torque transfer analysis', 
        link: 'https://cad.onshape.com/documents/d51b81b7b5242d13238d5f9c/w/1cc7b2cef94a6d49ef6814b1/e/ec7b4c799195e4597f4dd2ef' 
    },
    { 
        id: 'ff-practice', 
        title: 'FF Practice Bot', 
        tag: 'Prototyping', 
        img: 'Pictures/Screenshot 2026-04-20 223506.png', 
        desc: 'Platform for coaxial turret and slide integration research.', 
        tech: '• 5-DOF outtake\n• 6-wheel tank drive.', 
        link: null 
    },
    { 
        id: 'super-modular', 
        title: 'Super Modular Drivetrain', 
        tag: 'Efficiency', 
        img: 'Pictures/Screenshot 2026-04-20 221146.png', 
        desc: 'Study on belt vs. planetary transmission efficiency.', 
        tech: '• Benchmarked 800-1000 RPM range\n• Minimized transmission loss.', 
        link: 'https://cad.onshape.com/documents/a762d78dceac9b2eadaac582/w/4a5e7dc5b1c5d9c9cf3f7ade/e/c9b695e9dc026b50b541b51a' 
    },
    { 
        id: 'itd-v3', 
        title: 'Into the Deep V3', 
        tag: 'Flagship Build', 
        img: 'Pictures/storm.gif', // Updated thumbnail to use storm.gif
        desc: 'Flagship assembly for the 2026 season featuring a virtual four-bar linkage.', 
        tech: '• Virtual four-bar linkage\n• Internal wire management\n• High-torque climbing drive', 
        link: 'https://cad.onshape.com/documents/500e0b556027f584a0163ccc/w/6ee5606072da4702d9095a64/e/5865db44d45624407bc74789' 
    },
    { 
        id: 'itd-v2', 
        title: 'Into the Deep V2', 
        tag: 'Kinematics', 
        img: 'Pictures/Screenshot 2026-04-19 220411.png', 
        desc: 'Study on pitching linear extensions to maximize reach.', 
        tech: '• 6-DOF system\n• 3D-line stringing path analysis.', 
        link: 'https://cad.onshape.com/documents/acfcfb5e789f9d1567fe2565/w/0edabab2052a78754d798648/e/5b55488c01ab4972398a8935' 
    },
    { 
        id: 'itd-v1', 
        title: 'Into the Deep V1', 
        tag: 'Linkage Analysis', 
        img: 'Pictures/itd dr4b smol.gif', 
        desc: 'Double Reverse Four-Bar mechanism using overcenter linkages.', 
        tech: '• Optimized lifting torque\n• Active pivoting intake.', 
        link: null 
    },
    { 
        id: 'locking-mecanum', 
        title: 'Locking Mecanum', 
        tag: 'Experimental', 
        img: 'Pictures/Screenshot 2026-04-20 195752.png', 
        desc: 'Custom planetary gearbox to toggle between holonomic and traction modes.', 
        tech: '• Planetary wheel hubs\n• Traction-lock mechanism.', 
        link: 'https://cad.onshape.com/documents/288792bb3626321c94175cd8/w/b73be8bde34d489242e6aa53/e/fc395c62069a16d3302fc8d7' 
    },
    { 
        id: 'coaxial-swerve', 
        title: 'Coaxial Swerve Drive', 
        tag: 'Advanced Research', 
        img: 'Pictures/Screenshot 2026-04-25 205851.png', 
        desc: 'Master-sketching platform for coaxial swerve pod kinematics.', 
        tech: '• Concentric shaft study\n• Custom idler belt paths.', 
        link: 'https://cad.onshape.com/documents/a5c8fcac7ec2f36807091e62/w/d628b2deadbf7ddc49ca9853/e/1167eec7910b8e92006cde84' 
    },
    { 
        id: 'diff-swerve', 
        title: 'Differential Swerve', 
        tag: 'Transmission', 
        img: 'Pictures/Screenshot 2026-04-20 193233.png', 
        desc: 'Intrinsic differential gear system study for holonomic movement.', 
        tech: '• 3D-printed transmission housing\n• Structural stability analysis.', 
        link: null 
    },
    { 
        id: 'centerstage', 
        title: 'Centerstage Robot', 
        tag: 'Competitive', 
        img: 'Pictures/Screenshot 2026-04-19 143825.png', 
        desc: 'Robot build utilizing professional CNC-routed fabrication.', 
        tech: '• CNC-routed components\n• 3-DOF arm integration.', 
        link: null 
    },
    { 
        id: 'powerplay', 
        title: 'PowerPlay Robot', 
        tag: 'Mechanical', 
        img: 'Pictures/Screenshot 2026-04-18 231050.png', 
        desc: 'Development of a bent steel sheet metal claw.', 
        tech: '• Laser-cut steel build\n• Compliant rubber linings.', 
        link: null 
    },
    { 
        id: 'ff-foundation', 
        title: 'Freight Frenzy Robot', 
        tag: 'Foundational', 
        img: 'Pictures/Screenshot 2026-04-18 224554.png', 
        desc: 'Inaugural CAD project establishing core competencies.', 
        tech: '• Holonomic drivetrain kinematics\n• OpenCV vision basics.', 
        link: null 
    }
];
