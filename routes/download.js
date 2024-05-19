// router.js
import express from "express";
import { auth } from "../auth/auth.js";
import { format } from "@fast-csv/format";
import TechnovaRegistration from "../models/registration.js";
import ReplicaRegistration from "../models/replicaregistration.js";
import LangameRegistration  from "../models/langameregistration.js"
import Cultural from  "../models/cultural.js";
import Debate from "../models/debate.js";
import Seminar from "../models/seminar.js";
import Paperpresentation from "../models/paperpresentation.js";
import Quiz from "../models/quiz.js";
import Debugging from "../models/debugging.js";
import TreasureHunt from "../models/treasurehunt.js";
import Photography from "../models/photography.js"
import Videography from "../models/videography.js"
import WebDesigning from "../models/webdesigning.js";


const downloadRouter = express.Router();
//                   v change
downloadRouter.get("/technova", auth, async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="data.csv"');
    /// start           v change
    const fetch = await TechnovaRegistration.find().sort({
      paymentStatus: -1,
    });
    const csvStream = format({ headers: true });
    csvStream.pipe(res);

    fetch.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          //      v change
          event: "Technova",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,

          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });

    csvStream.end(); 
    // End the CSV stream

// replica-----------------


  } catch (error) {
    console.log(error);
    res.status(500).json("ERROR DOWNLOADING");
  }
});
//replica
downloadRouter.get("/replica", auth, async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="data.csv"');
    /// start           v change
    const fetch = await ReplicaRegistration.find().sort({
      paymentStatus: -1,
    });
    const csvStream = format({ headers: true });
    csvStream.pipe(res);

    fetch.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          //      v change
          event: "replica",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });

    csvStream.end(); 
    // End the CSV stream

// replica-----------------


  } catch (error) {
    console.log(error);
    res.status(500).json("ERROR DOWNLOADING");
  }
});


// ---------------------------------------------
//web
downloadRouter.get("/webdesign", auth, async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="data.csv"');
    /// start           v change
    const fetch = await WebDesigning.find().sort({
      paymentStatus: -1,
    });
    const csvStream = format({ headers: true });
    csvStream.pipe(res);

    fetch.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          //      v change
          event: "webdesign",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });

    csvStream.end(); 
    // End the CSV stream

// replica-----------------


  } catch (error) {
    console.log(error);
    res.status(500).json("ERROR DOWNLOADING");
  }
});









// -------------------------------------------------
//langame=======
downloadRouter.get("/langame", auth, async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="data.csv"');
    /// start           v change
    const fetch = await LangameRegistration.find().sort({
      paymentStatus: -1,
    });
    const csvStream = format({ headers: true });
    csvStream.pipe(res);

    fetch.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          //      v change
          event: "langame",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });

    csvStream.end(); 
    // End the CSV stream

// replica-----------------


  } catch (error) {
    console.log(error);
    res.status(500).json("ERROR DOWNLOADING");
  }
});

//cultural=====
downloadRouter.get("/cultural", auth, async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="data.csv"');
    /// start           v change
    const fetch = await Cultural.find().sort({
      paymentStatus: -1,
    });
    const csvStream = format({ headers: true });
    csvStream.pipe(res);

    fetch.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          //      v change
          event: "cultural",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });

    csvStream.end(); 
    // End the CSV stream

// replica-----------------


  } catch (error) {
    console.log(error);
    res.status(500).json("ERROR DOWNLOADING");
  }
});
//debate=================
downloadRouter.get("/debate", auth, async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="data.csv"');
    /// start           v change
    const fetch = await Debate.find().sort({
      paymentStatus: -1,
    });
    const csvStream = format({ headers: true });
    csvStream.pipe(res);

    fetch.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          //      v change
          event: "debate",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });

    csvStream.end(); 
    // End the CSV stream

// replica-----------------


  } catch (error) {
    console.log(error);
    res.status(500).json("ERROR DOWNLOADING");
  }
});

//seminar=================
downloadRouter.get("/seminar", auth, async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="data.csv"');
    /// start           v change
    const fetch = await Seminar.find().sort({
      paymentStatus: -1,
    });
    const csvStream = format({ headers: true });
    csvStream.pipe(res);

    fetch.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          //      v change
          event: "seminar",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });

    csvStream.end(); 
    // End the CSV stream

// seminar-----------------


  } catch (error) {
    console.log(error);
    res.status(500).json("ERROR DOWNLOADING");
  }
});
//ppt=================
downloadRouter.get("/ppt", auth, async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="data.csv"');
    /// start           v change
    const fetch = await Paperpresentation.find().sort({
      paymentStatus: -1,
    });
    const csvStream = format({ headers: true });
    csvStream.pipe(res);

    fetch.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          //      v change
          event: "ppt",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });

    csvStream.end(); 
    // End the CSV stream

// seminar-----------------


  } catch (error) {
    console.log(error);
    res.status(500).json("ERROR DOWNLOADING");
  }
});
//quiz=================
downloadRouter.get("/quiz", auth, async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="data.csv"');
    /// start           v change
    const fetch = await Quiz.find().sort({
      paymentStatus: -1,
    });
    const csvStream = format({ headers: true });
    csvStream.pipe(res);

    fetch.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          //      v change
          event: "quiz",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });

    csvStream.end(); 
    // End the CSV stream

// quiz-----------------


  } catch (error) {
    console.log(error);
    res.status(500).json("ERROR DOWNLOADING");
  }
});
//debugg=================
downloadRouter.get("/debugg", auth, async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="data.csv"');
    /// start           v change
    const fetch = await Debugging.find().sort({
      paymentStatus: -1,
    });
    const csvStream = format({ headers: true });
    csvStream.pipe(res);

    fetch.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          //      v change
          event: "debugg",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });

    csvStream.end(); 
    // End the CSV stream

// quiz-----------------


  } catch (error) {
    console.log(error);
    res.status(500).json("ERROR DOWNLOADING");
  }
});
//treasure=================
downloadRouter.get("/treasure", auth, async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="data.csv"');
    /// start           v change
    const fetch = await TreasureHunt.find().sort({
      paymentStatus: -1,
    });
    const csvStream = format({ headers: true });
    csvStream.pipe(res);

    fetch.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          //      v change
          event: "treasure",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });

    csvStream.end(); 
    // End the CSV stream

// quiz-----------------


  } catch (error) {
    console.log(error);
    res.status(500).json("ERROR DOWNLOADING");
  }
});


// Videography=================================================?

downloadRouter.get("/photography", auth, async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="data.csv"');
    /// start           v change
    const fetch = await Photography.find().sort({
      paymentStatus: -1,
    });
    const csvStream = format({ headers: true });
    csvStream.pipe(res);

    fetch.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          //      v change
          event: "photography",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });

    csvStream.end(); 
    // End the CSV stream

// videography-----------------


  } catch (error) {
    console.log(error);
    res.status(500).json("ERROR DOWNLOADING");
  }
});

downloadRouter.get("/videography", auth, async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="data.csv"');
    /// start           v change
    const fetch = await Videography.find().sort({
      paymentStatus: -1,
    });
    const csvStream = format({ headers: true });
    csvStream.pipe(res);

    fetch.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          //      v change
          event: "videography",
          teamId: `Team ${docid + 1}`,
          email:p?.email,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });

    csvStream.end(); 
    // End the CSV stream

// videography-----------------


  } catch (error) {
    console.log(error);
    res.status(500).json("ERROR DOWNLOADING");
  }
});












//add dat
downloadRouter.get("/all", auth, async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="data.csv"');

    const csvStream = format({ headers: true });
    csvStream.pipe(res);

    const technova = await TechnovaRegistration.find().sort({
      paymentStatus: -1,
    });
//replica=============
    const replica = await ReplicaRegistration.find().sort({
      paymentStatus: -1,
    });
//langame=============
const langame = await LangameRegistration.find().sort({
  paymentStatus: -1,
});
//cultural=============
const cultural = await Cultural.find().sort({
  paymentStatus: -1,
});
//debate=============
const debate = await Debate.find().sort({
  paymentStatus: -1,
});
//seminar=============
const seminar = await Seminar.find().sort({
  paymentStatus: -1,
});
//ppt=============
const ppt = await Paperpresentation.find().sort({
  paymentStatus: -1,
});
//quiz=============
const quiz = await Quiz.find().sort({
  paymentStatus: -1,
});
//debugg=============
const debugg = await Debugging.find().sort({
  paymentStatus: -1,
});
//ppt=============
const treasure = await TreasureHunt.find().sort({
  paymentStatus: -1,
});
//photography=============
const photography = await Photography.find().sort({
  paymentStatus: -1,
});

//videography=============
const videography = await Videography.find().sort({
  paymentStatus: -1,
});
//webdesign=============
const webdesign = await WebDesigning.find().sort({
  paymentStatus: -1,
});










// ------------------------------------------------------------------------------------------------------------
    technova.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          event: "Technova",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });

    replica.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          event: "Replica",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });
    // langame=========================================
    langame.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          event: "langame",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });
     // cultural=========================================
     cultural.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          event: "cultural",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });
     // debate=========================================
     debate.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
        csvStream.write({
          event: "debate",
          teamId: `Team ${docid + 1}`,
          collegename: _doc?.collegename,
          name: p?.username,
          phone: `${p?.phone}`,
          payment: _doc?.paymentStatus,
        });
      });
    });
// seminar=========================================
   seminar.forEach(({ _doc }, docid) => {
      _doc?.participants?.map((p) => {
            csvStream.write({
              event: "seminar",
              teamId: `Team ${docid + 1}`,
              collegename: _doc?.collegename,
              name: p?.username,
              phone: `${p?.phone}`,
              payment: _doc?.paymentStatus,
            });
          });
        });
 // ppt=========================================
 ppt.forEach(({ _doc }, docid) => {
  _doc?.participants?.map((p) => {
    csvStream.write({
      event: "ppt",
      teamId: `Team ${docid + 1}`,
      collegename: _doc?.collegename,
      name: p?.username,
      phone: `${p?.phone}`,
      payment: _doc?.paymentStatus,
    });
  });
});
 // quiz=========================================
 quiz.forEach(({ _doc }, docid) => {
  _doc?.participants?.map((p) => {
    csvStream.write({
      event: "quiz",
      teamId: `Team ${docid + 1}`,
      collegename: _doc?.collegename,
      name: p?.username,
      phone: `${p?.phone}`,
      payment: _doc?.paymentStatus,
    });
  });
});
 // debugg=========================================
 debugg.forEach(({ _doc }, docid) => {
  _doc?.participants?.map((p) => {
    csvStream.write({
      event: "debugg",
      teamId: `Team ${docid + 1}`,
      collegename: _doc?.collegename,
      name: p?.username,
      phone: `${p?.phone}`,
      payment: _doc?.paymentStatus,
    });
  });
});
 // treasure hunt=========================================
 treasure.forEach(({ _doc }, docid) => {
  _doc?.participants?.map((p) => {
    csvStream.write({
      event: "treasure hunt",
      teamId: `Team ${docid + 1}`,
      collegename: _doc?.collegename,
      name: p?.username,
      phone: `${p?.phone}`,
      payment: _doc?.paymentStatus,
    });
  });
});
    //

   // photography=========================================
 photography.forEach(({ _doc }, docid) => {
  _doc?.participants?.map((p) => {
    csvStream.write({
      event: "photography",
      teamId: `Team ${docid + 1}`,
      collegename: _doc?.collegename,
      name: p?.username,
      phone: `${p?.phone}`,
      payment: _doc?.paymentStatus,
    });
  });
});

   // videography=========================================
   videography.forEach(({ _doc }, docid) => {
    _doc?.participants?.map((p) => {
      csvStream.write({
        event: "videography",
        teamId: `Team ${docid + 1}`,
        email:p?.email,
        collegename: _doc?.collegename,
        name: p?.username,
        phone: `${p?.phone}`,
        payment: _doc?.paymentStatus,
      });
    });
  });

  // webdesign=========================================
  webdesign.forEach(({ _doc }, docid) => {
    _doc?.participants?.map((p) => {
      csvStream.write({
        event: "webdesign",
        teamId: `Team ${docid + 1}`,
        email:p?.email,
        collegename: _doc?.collegename,
        name: p?.username,
        phone: `${p?.phone}`,
        payment: _doc?.paymentStatus,
      });
    });
  });


// -------------------------------------------------------------------------------------------------------------------
    csvStream.end(); // End the CSV stream
  } catch (error) {
    console.log(error);
    res.status(500).json("ERROR DOWNLOADING");
  }
});

export default downloadRouter;
