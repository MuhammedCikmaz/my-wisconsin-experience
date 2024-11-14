function moveCamera(map3DElement, lat, lng, options = {}) {
    const {
        altitude = 300,
        heading,
        range = 600,
        roll,
        tilt = 45,
        durationMillis = 2000
    } = options;

    // Build the camera options object, only including defined values
    const cameraOptions = {
        center: {
            lat: lat,
            lng: lng,
            ...(altitude !== undefined && { altitude })
        }
    };

    // Only add optional camera properties if they are defined
    if (heading !== undefined) cameraOptions.heading = heading;
    if (range !== undefined) cameraOptions.range = range;
    if (roll !== undefined) cameraOptions.roll = roll;
    if (tilt !== undefined) cameraOptions.tilt = tilt;

    return map3DElement.flyCameraTo({
        endCamera: cameraOptions,
        durationMillis
    });
}

async function addMarker(map3DElement, lat, lng, options = {}) {
    const { Map3DElement, Marker3DElement } = await google.maps.importLibrary("maps3d");

    removeMarker();

    const marker = new Marker3DElement({
        position: { lat: lat, lng: lng, altitude: 50 },
        altitudeMode: 'RELATIVE_TO_GROUND',
        extruded: true,
    });

    map3DElement.append(marker);
}

function removeMarker() {
    try {
        const marker = document.querySelector('gmp-marker-3d');
        marker.remove();
    } catch (error) {

    }
}

function moveCameraAround(map3DElement, lat, lng, options = {}) {
    const {
        altitude = 300,
        heading,
        range = 600,
        roll,
        tilt = 45,
        durationMillis = 80000,
        rounds = 5
    } = options;

    console.log(durationMillis);
    // Build the camera options object, only including defined values
    const cameraOptions = {
        center: {
            lat: lat,
            lng: lng,
            ...(altitude !== undefined && { altitude })
        }
    };

    // Only add optional camera properties if they are defined
    if (heading !== undefined) cameraOptions.heading = heading;
    if (range !== undefined) cameraOptions.range = range;
    if (roll !== undefined) cameraOptions.roll = roll;
    if (tilt !== undefined) cameraOptions.tilt = tilt;

    return map3DElement.flyCameraAround({
        camera: cameraOptions,
        durationMillis,
        rounds
    });
}


async function initMap() {
    const { Map3DElement } = await google.maps.importLibrary("maps3d");
    const { Polygon3DElement, AltitudeMode } = await google.maps.importLibrary("maps3d");

    // center: { lat: 43.076360, lng: -89.400022, altitude: 400 },

    const camera = {
        center: { lat: 43.0757626122969, lng: -89.41467213100795, altitude: 400 },
        tilt: 55,
        range: 1500
    };

    const map3DElement = new Map3DElement({
        // center: { lat: 43.0757626122969, lng: -89.41467213100795, altitude: 400 },
        // range: 4500,
        // tilt: 30,
        ...camera,
        defaultLabelsDisabled: true,

    });

    // map3DElement.flyCameraAround({
    //     camera,
    //     durationMillis: 60000,
    //     rounds: 1
    // });

    document.body.append(map3DElement);


    const polygonOptions = {
        strokeColor: "rgba(198, 14, 24, 1)", // UW Madison red
        strokeWidth: 4,
        fillColor: "rgba(198, 14, 24, 0.01)", // Transparent UW Madison red
        altitudeMode: AltitudeMode.ABSOLUTE,
        extruded: true,
        drawsOccludedSegments: true,
    }

    const campusPolygon = new google.maps.maps3d.Polygon3DElement(polygonOptions);

    const altitude = 300;

    // Coordinates roughly outlining the main campus area
    campusPolygon.outerCoordinates = [
        {
            "lat": 43.076988,
            "lng": -89.3973042,
            "altitude": altitude
        },
        {
            "lat": 43.0769873,
            "lng": -89.3972965,
            "altitude": altitude
        },
        {
            "lat": 43.0769875,
            "lng": -89.398242,
            "altitude": altitude
        },
        {
            "lat": 43.0769365,
            "lng": -89.3986122,
            "altitude": altitude
        },
        {
            "lat": 43.077007,
            "lng": -89.3989233,
            "altitude": altitude
        },
        {
            "lat": 43.0769483,
            "lng": -89.3992505,
            "altitude": altitude
        },
        {
            "lat": 43.0772972,
            "lng": -89.401428,
            "altitude": altitude
        },
        {
            "lat": 43.077356,
            "lng": -89.4024901,
            "altitude": altitude
        },
        {
            "lat": 43.0773266,
            "lng": -89.4031524,
            "altitude": altitude
        },
        {
            "lat": 43.077405,
            "lng": -89.4036136,
            "altitude": altitude
        },
        {
            "lat": 43.0776251,
            "lng": -89.4051311,
            "altitude": altitude
        },
        {
            "lat": 43.0776114,
            "lng": -89.4057185,
            "altitude": altitude
        },
        {
            "lat": 43.0776855,
            "lng": -89.4063389,
            "altitude": altitude
        },
        {
            "lat": 43.0777717,
            "lng": -89.4072187,
            "altitude": altitude
        },
        {
            "lat": 43.0779033,
            "lng": -89.4081398,
            "altitude": altitude
        },
        {
            "lat": 43.0780659,
            "lng": -89.4088131,
            "altitude": altitude
        },
        {
            "lat": 43.0782142,
            "lng": -89.409442,
            "altitude": altitude
        },
        {
            "lat": 43.0784963,
            "lng": -89.4099972,
            "altitude": altitude
        },
        {
            "lat": 43.078688,
            "lng": -89.410544,
            "altitude": altitude
        },
        {
            "lat": 43.0787762,
            "lng": -89.4106137,
            "altitude": altitude
        },
        {
            "lat": 43.0787409,
            "lng": -89.4107854,
            "altitude": altitude
        },
        {
            "lat": 43.0788506,
            "lng": -89.4108712,
            "altitude": altitude
        },
        {
            "lat": 43.0787076,
            "lng": -89.411059,
            "altitude": altitude
        },
        {
            "lat": 43.0786586,
            "lng": -89.4115418,
            "altitude": altitude
        },
        {
            "lat": 43.0786369,
            "lng": -89.4121739,
            "altitude": altitude
        },
        {
            "lat": 43.0786127,
            "lng": -89.412838,
            "altitude": altitude
        },
        {
            "lat": 43.0785971,
            "lng": -89.4136212,
            "altitude": altitude
        },
        {
            "lat": 43.0784717,
            "lng": -89.4140075,
            "altitude": altitude
        },
        {
            "lat": 43.0785109,
            "lng": -89.4147478,
            "altitude": altitude
        },
        {
            "lat": 43.0783855,
            "lng": -89.4158958,
            "altitude": altitude
        },
        {
            "lat": 43.0787328,
            "lng": -89.4170826,
            "altitude": altitude
        },
        {
            "lat": 43.0794146,
            "lng": -89.4188099,
            "altitude": altitude
        },
        {
            "lat": 43.0794218,
            "lng": -89.4201212,
            "altitude": altitude
        },
        {
            "lat": 43.0788302,
            "lng": -89.4210224,
            "altitude": altitude
        },
        {
            "lat": 43.0784553,
            "lng": -89.4216329,
            "altitude": altitude
        },
        {
            "lat": 43.0784828,
            "lng": -89.4226951,
            "altitude": altitude
        },
        {
            "lat": 43.0789048,
            "lng": -89.4235303,
            "altitude": altitude
        },
        {
            "lat": 43.0803532,
            "lng": -89.4250865,
            "altitude": altitude
        },
        {
            "lat": 43.0813247,
            "lng": -89.4262655,
            "altitude": altitude
        },
        {
            "lat": 43.0827535,
            "lng": -89.4267331,
            "altitude": altitude
        },
        {
            "lat": 43.0839,
            "lng": -89.4267213,
            "altitude": altitude
        },
        {
            "lat": 43.084378,
            "lng": -89.4264531,
            "altitude": altitude
        },
        {
            "lat": 43.0850855,
            "lng": -89.4259432,
            "altitude": altitude
        },
        {
            "lat": 43.0853558,
            "lng": -89.4250366,
            "altitude": altitude
        },
        {
            "lat": 43.085524,
            "lng": -89.4243202,
            "altitude": altitude
        },
        {
            "lat": 43.0854143,
            "lng": -89.4237838,
            "altitude": altitude
        },
        {
            "lat": 43.0852262,
            "lng": -89.4233653,
            "altitude": altitude
        },
        {
            "lat": 43.0855553,
            "lng": -89.422389,
            "altitude": altitude
        },
        {
            "lat": 43.0858163,
            "lng": -89.4215932,
            "altitude": altitude
        },
        {
            "lat": 43.0861298,
            "lng": -89.4208636,
            "altitude": altitude
        },
        {
            "lat": 43.086451,
            "lng": -89.4202092,
            "altitude": altitude
        },
        {
            "lat": 43.0867879,
            "lng": -89.4196298,
            "altitude": altitude
        },
        {
            "lat": 43.0871484,
            "lng": -89.4192221,
            "altitude": altitude
        },
        {
            "lat": 43.0873286,
            "lng": -89.4188788,
            "altitude": altitude
        },
        {
            "lat": 43.0878771,
            "lng": -89.4176021,
            "altitude": altitude
        },
        {
            "lat": 43.0880024,
            "lng": -89.4170656,
            "altitude": altitude
        },
        {
            "lat": 43.0879946,
            "lng": -89.4167008,
            "altitude": altitude
        },
        {
            "lat": 43.0883237,
            "lng": -89.4161644,
            "altitude": altitude
        },
        {
            "lat": 43.0886293,
            "lng": -89.4156065,
            "altitude": altitude
        },
        {
            "lat": 43.0891072,
            "lng": -89.4155207,
            "altitude": altitude
        },
        {
            "lat": 43.0894911,
            "lng": -89.4152095,
            "altitude": altitude
        },
        {
            "lat": 43.089781,
            "lng": -89.4151881,
            "altitude": altitude
        },
        {
            "lat": 43.0897575,
            "lng": -89.415585,
            "altitude": altitude
        },
        {
            "lat": 43.0893736,
            "lng": -89.4162502,
            "altitude": altitude
        },
        {
            "lat": 43.0889818,
            "lng": -89.4167974,
            "altitude": altitude
        },
        {
            "lat": 43.0885274,
            "lng": -89.4174411,
            "altitude": altitude
        },
        {
            "lat": 43.0879006,
            "lng": -89.4181063,
            "altitude": altitude
        },
        {
            "lat": 43.0874383,
            "lng": -89.4191899,
            "altitude": altitude
        },
        {
            "lat": 43.0872972,
            "lng": -89.420531,
            "altitude": altitude
        },
        {
            "lat": 43.0871916,
            "lng": -89.4227845,
            "altitude": altitude
        },
        {
            "lat": 43.0873741,
            "lng": -89.4244732,
            "altitude": altitude
        },
        {
            "lat": 43.0882622,
            "lng": -89.4260539,
            "altitude": altitude
        },
        {
            "lat": 43.0891901,
            "lng": -89.4273973,
            "altitude": altitude
        },
        {
            "lat": 43.0899266,
            "lng": -89.4281161,
            "altitude": altitude
        },
        {
            "lat": 43.0916046,
            "lng": -89.4295966,
            "altitude": altitude
        },
        {
            "lat": 43.0927614,
            "lng": -89.4307692,
            "altitude": altitude
        },
        {
            "lat": 43.0927528,
            "lng": -89.4323706,
            "altitude": altitude
        },
        {
            "lat": 43.0919928,
            "lng": -89.4331216,
            "altitude": altitude
        },
        {
            "lat": 43.0916122,
            "lng": -89.434657,
            "altitude": altitude
        },
        {
            "lat": 43.0909697,
            "lng": -89.4364058,
            "altitude": altitude
        },
        {
            "lat": 43.0909149,
            "lng": -89.4368886,
            "altitude": altitude
        },
        {
            "lat": 43.0904604,
            "lng": -89.4374143,
            "altitude": altitude
        },
        {
            "lat": 43.0900765,
            "lng": -89.4382941,
            "altitude": altitude
        },
        {
            "lat": 43.0896764,
            "lng": -89.4388043,
            "altitude": altitude
        },
        {
            "lat": 43.0891123,
            "lng": -89.4400596,
            "altitude": altitude
        },
        {
            "lat": 43.0887127,
            "lng": -89.4414222,
            "altitude": altitude
        },
        {
            "lat": 43.0878414,
            "lng": -89.4442519,
            "altitude": altitude
        },
        {
            "lat": 43.0870266,
            "lng": -89.4438549,
            "altitude": altitude
        },
        {
            "lat": 43.0866094,
            "lng": -89.4451924,
            "altitude": altitude
        },
        {
            "lat": 43.0848784,
            "lng": -89.4451748,
            "altitude": altitude
        },
        {
            "lat": 43.0826686,
            "lng": -89.4451104,
            "altitude": altitude
        },
        {
            "lat": 43.082653,
            "lng": -89.4430075,
            "altitude": altitude
        },
        {
            "lat": 43.082653,
            "lng": -89.4398962,
            "altitude": altitude
        },
        {
            "lat": 43.0826718,
            "lng": -89.4370685,
            "altitude": altitude
        },
        {
            "lat": 43.0820762,
            "lng": -89.4370578,
            "altitude": altitude
        },
        {
            "lat": 43.081427,
            "lng": -89.4370604,
            "altitude": altitude
        },
        {
            "lat": 43.0809764,
            "lng": -89.4370711,
            "altitude": altitude
        },
        {
            "lat": 43.0805553,
            "lng": -89.4370538,
            "altitude": altitude
        },
        {
            "lat": 43.0801713,
            "lng": -89.4369734,
            "altitude": altitude
        },
        {
            "lat": 43.0797108,
            "lng": -89.4368219,
            "altitude": altitude
        },
        {
            "lat": 43.078994,
            "lng": -89.4365152,
            "altitude": altitude
        },
        {
            "lat": 43.0790954,
            "lng": -89.4359876,
            "altitude": altitude
        },
        {
            "lat": 43.0786591,
            "lng": -89.4356411,
            "altitude": altitude
        },
        {
            "lat": 43.0777795,
            "lng": -89.4347773,
            "altitude": altitude
        },
        {
            "lat": 43.0773029,
            "lng": -89.4338326,
            "altitude": altitude
        },
        {
            "lat": 43.0768405,
            "lng": -89.4338863,
            "altitude": altitude
        },
        {
            "lat": 43.0763782,
            "lng": -89.4339077,
            "altitude": altitude
        },
        {
            "lat": 43.0759028,
            "lng": -89.4340128,
            "altitude": altitude
        },
        {
            "lat": 43.0753458,
            "lng": -89.4339788,
            "altitude": altitude
        },
        {
            "lat": 43.0745542,
            "lng": -89.4336784,
            "altitude": altitude
        },
        {
            "lat": 43.07359,
            "lng": -89.433624,
            "altitude": altitude
        },
        {
            "lat": 43.0734333,
            "lng": -89.432873,
            "altitude": altitude
        },
        {
            "lat": 43.0732452,
            "lng": -89.430577,
            "altitude": altitude
        },
        {
            "lat": 43.0732765,
            "lng": -89.4284956,
            "altitude": altitude
        },
        {
            "lat": 43.073543,
            "lng": -89.4251697,
            "altitude": altitude
        },
        {
            "lat": 43.0738878,
            "lng": -89.4225733,
            "altitude": altitude
        },
        {
            "lat": 43.0744206,
            "lng": -89.4179944,
            "altitude": altitude
        },
        {
            "lat": 43.073949,
            "lng": -89.4179656,
            "altitude": altitude
        },
        {
            "lat": 43.0733142,
            "lng": -89.4177939,
            "altitude": altitude
        },
        {
            "lat": 43.0735023,
            "lng": -89.4164421,
            "altitude": altitude
        },
        {
            "lat": 43.0735023,
            "lng": -89.4160129,
            "altitude": altitude
        },
        {
            "lat": 43.073429,
            "lng": -89.4137917,
            "altitude": altitude
        },
        {
            "lat": 43.0679336,
            "lng": -89.4138641,
            "altitude": altitude
        },
        {
            "lat": 43.0678337,
            "lng": -89.4137587,
            "altitude": altitude
        },
        {
            "lat": 43.0681922,
            "lng": -89.4122011,
            "altitude": altitude
        },
        {
            "lat": 43.0701325,
            "lng": -89.4091989,
            "altitude": altitude
        },
        {
            "lat": 43.071171,
            "lng": -89.4091453,
            "altitude": altitude
        },
        {
            "lat": 43.0711197,
            "lng": -89.4072618,
            "altitude": altitude
        },
        {
            "lat": 43.0701235,
            "lng": -89.4072408,
            "altitude": altitude
        },
        {
            "lat": 43.0701157,
            "lng": -89.4055725,
            "altitude": altitude
        },
        {
            "lat": 43.069596,
            "lng": -89.405546,
            "altitude": altitude
        },
        {
            "lat": 43.0700681,
            "lng": -89.4032442,
            "altitude": altitude
        },
        {
            "lat": 43.0701181,
            "lng": -89.4026172,
            "altitude": altitude
        },
        {
            "lat": 43.0700906,
            "lng": -89.4021773,
            "altitude": altitude
        },
        {
            "lat": 43.0699613,
            "lng": -89.4015282,
            "altitude": altitude
        },
        {
            "lat": 43.0697262,
            "lng": -89.4007396,
            "altitude": altitude
        },
        {
            "lat": 43.0680555,
            "lng": -89.4008088,
            "altitude": altitude
        },
        {
            "lat": 43.0679162,
            "lng": -89.3992658,
            "altitude": altitude
        },
        {
            "lat": 43.0694036,
            "lng": -89.3991727,
            "altitude": altitude
        },
        {
            "lat": 43.0683263,
            "lng": -89.3954714,
            "altitude": altitude
        },
        {
            "lat": 43.0692175,
            "lng": -89.3942945,
            "altitude": altitude
        },
        {
            "lat": 43.0694723,
            "lng": -89.3948148,
            "altitude": altitude
        },
        {
            "lat": 43.0702913,
            "lng": -89.3943427,
            "altitude": altitude
        },
        {
            "lat": 43.070307,
            "lng": -89.3959028,
            "altitude": altitude
        },
        {
            "lat": 43.0732379,
            "lng": -89.3958302,
            "altitude": altitude
        },
        {
            "lat": 43.0732169,
            "lng": -89.3974103,
            "altitude": altitude
        },
        {
            "lat": 43.076988,
            "lng": -89.3973042,
            "altitude": altitude
        }
    ];

    map3DElement.append(campusPolygon);

    function animate() {
        try {
            const warning = document.querySelector(".vAygCK-api-load-alpha-banner");
            warning.remove();
        } catch (error) {

        }

        requestAnimationFrame(animate);
    }

    animate();

    setButtons(map3DElement);
}

function setButtons(map3DElement) {
    document.addEventListener("DOMContentLoaded", function (e) {
        document.querySelectorAll(".landmark-button").forEach((mark) => {
            var cor = mark.dataset.cor;
            cor = cor.split(",");

            const lat = parseFloat(cor[0]);
            const lng = parseFloat(cor[1]);

            console.log(lat, lng);

            mark.addEventListener("click", function (e) {
                moveCamera(map3DElement, lat, lng)
                addMarker(map3DElement, lat, lng);

                //after 2 seconds move camera
                setTimeout(() => {
                    moveCameraAround(map3DElement, lat, lng);
                }, 2000);

            })
        })

        document.addEventListener("mousedown", function (e) {
            map3DElement.stopCameraAnimation();
        });

    })
}



