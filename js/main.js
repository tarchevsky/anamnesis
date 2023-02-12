/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/burger/burger.js":
/*!************************************************!*\
  !*** ./src/blocks/components/burger/burger.js ***!
  \************************************************/
/***/ (function() {

var burger = document.querySelector('.burger');
if (burger) {
  burgerScripts();
}
function burgerScripts() {
  var headerMenu = document.querySelector('.header-menu'),
    burgerInner = burger.querySelector('.burger__inner'),
    menuItem = document.querySelectorAll('.header-menu__item');

  // const dropDown = document.querySelector('.dropdown'),
  //     dropItems = document.querySelector('.dropdown__items'),
  //     dropItem = document.querySelectorAll('.dropdown__item');

  burgerListener();
  burgerCloseKeyDown();
  menuItemIteration();

  // dropdownInBurger(dropItem, dropItems);

  function overflowMenu() {
    if (burgerInner.classList.contains('burger__inner--active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  function removeMenuActive() {
    burgerInner.classList.remove('burger__inner--active');
    headerMenu.classList.remove('header-menu--active');
    overflowMenu();
  }
  function burgerListener() {
    burger.addEventListener('click', function () {
      headerMenu.classList.toggle('header-menu--active');
      burgerInner.classList.toggle('burger__inner--active');

      // dropDown.classList.add('dropdown-burger');

      overflowMenu();
    });
  }
  function burgerCloseKeyDown() {
    document.addEventListener('keydown', function (event) {
      if (event.code === 'Escape' && burgerInner.classList.contains('burger__inner--active')) {
        removeMenuActive();
      }
    });
  }
  function menuItemIteration() {
    menuItem.forEach(function (item, i) {
      item.addEventListener('click', function () {
        if (!menuItem[i].querySelector('.dropdown')) {
          removeMenuActive();
        }
      });
    });
  }

  // function dropdownInBurger(dropdownItem, dropDownItems) {
  //     dropdownItem.forEach((item) => {
  //         item.addEventListener('click', () => {
  //             removeMenuActive();
  //             dropDownItems.style.display = 'none';
  //         });
  //     });
  // }
}

/***/ }),

/***/ "./src/blocks/components/form/form.js":
/*!********************************************!*\
  !*** ./src/blocks/components/form/form.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()('form').submit(function (e) {
  e.preventDefault();

  // if(!$(this).valid) {
  //     return;
  // }

  if (window.confirm("Завершаем, подтвердить отправку формы? ")) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      type: 'POST',
      url: '../../mailer/smart.php',
      data: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).serialize()
    }).done(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input').val('');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('form').trigger('reset');
    });
    alert('Квиз пройден');
    return false;
  }
});

/***/ }),

/***/ "./src/blocks/components/img/img.js":
/*!******************************************!*\
  !*** ./src/blocks/components/img/img.js ***!
  \******************************************/
/***/ (function() {

var imageObserver = new IntersectionObserver(function (entries, options) {
  entries.forEach(function (entry) {
    if (entry.target.dataset.src !== undefined) {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        entry.target.alt = entry.target.dataset.alt;
        imageObserver.unobserve(entry.target);
      }
    }
  });
}, {});
var images = document.querySelectorAll('img').forEach(function (image) {
  return imageObserver.observe(image);
});

/***/ }),

/***/ "./src/blocks/modules/quiz/quiz.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/quiz/quiz.js ***!
  \*****************************************/
/***/ (function() {

var quizItem = document.querySelectorAll('.quiz__item'),
  next = document.querySelectorAll('.navigation__next a'),
  prev = document.querySelectorAll('.navigation__prev a'),
  condition = document.querySelectorAll('.input-condition'),
  result = document.querySelectorAll('.input-result'),
  agreementCheckbox = document.querySelector('.agreement > input[type="checkbox"]');
quizItem.forEach(function (item) {
  item.classList.remove('hidden');
});
next.forEach(function (item, i) {
  agreementCheckbox.addEventListener('click', function () {
    if (agreementCheckbox.checked) {
      item.style.display = 'block';
      agreementCheckbox.style.borderColor = '';
    } else {
      item.style.display = 'none';
    }
  });
  item.addEventListener('click', function () {
    // quizItem[i].classList.add('hidden');
    if (i === 1 && !agreementCheckbox.checked) {
      item.style.display = 'none';
      agreementCheckbox.style.borderColor = 'red';
    } else {
      quizItem[i].classList.add('hidden');
    }
  });
});
prev.forEach(function (item) {
  agreementCheckbox.addEventListener('click', function () {
    if (agreementCheckbox.checked) {
      item.style.display = 'block';
      agreementCheckbox.style.borderColor = '';
    } else {
      item.style.display = 'none';
    }
  });
  item.addEventListener('click', function () {
    for (var i = quizItem.length; i >= 0; i--) {
      if (quizItem[i] && quizItem[i].classList.contains('hidden')) {
        quizItem[i].classList.remove('hidden');
        window.scrollBy(0, -100);
        break;
      }
    }
  });
});
condition.forEach(function (item, i) {
  item.addEventListener('change', function (e) {
    if (e.target.checked) {
      result[i].style.marginTop = '10px';
      result[i].style.padding = '10px 0 10px 0';
      result[i].style.opacity = '1';
      result[i].style.zIndex = '1';
    } else {
      result[i].style.marginTop = '';
      result[i].style.padding = '';
      result[i].style.opacity = '';
      result[i].style.zIndex = '-1';
    }
  });
});
var input = document.querySelectorAll('input'),
  inputRadio = document.querySelectorAll('input[type="radio"]'),
  inputCheckbox = document.querySelectorAll('input[type="checkbox"]'),
  childsCode = document.querySelector('.childs-code'),
  familyComposition = document.querySelector('.family-composition'),
  complaints = document.querySelector('.complaints'),
  environmentSchool = document.querySelector('.environment-school'),
  environmentKindergarten = document.querySelector('.environment-kindergarten'),
  environmentHome = document.querySelector('.environment-home'),
  momAge = document.querySelector('.mom-age'),
  dadAge = document.querySelector('.dad-age'),
  infertility = document.querySelector('.infertility'),
  failedPregnancy = document.querySelector('.failed-pregnancy'),
  threatenedAbortion = document.querySelector('.threatened-abortion'),
  partOneToxicosis = document.querySelector('.part-one-toxicosis'),
  partOneBleeding = document.querySelector('.part-one-bleeding'),
  partOnePastInfections = document.querySelector('.part-one-past-infections'),
  partOneAnemia = document.querySelector('.part-one-anemia'),
  partOneAriGripp = document.querySelector('.part-one-ari-gripp'),
  partOneNothing = document.querySelector('.part-one-nothing'),
  partOneOther = document.querySelector('.part-one-other'),
  partTwoToxicosis = document.querySelector('.part-two-toxicosis'),
  partTwoAnemia = document.querySelector('.part-two-anemia'),
  partTwoNephropathy = document.querySelector('.part-two-nephropathy'),
  partTwoRapidWeightGain = document.querySelector('.part-two-rapid-weight-gain'),
  partTwoLowBloodPressure = document.querySelector('.part-two-low-blood-pressure'),
  partTwoHighBloodPressure = document.querySelector('.part-two-high-blood-pressure'),
  partTwoNothing = document.querySelector('.part-two-nothing'),
  partTwoAggravation = document.querySelector('.part-two-aggravation'),
  partTwoPsychotraumaticSituations = document.querySelector('.part-two-psychotraumatic-situations'),
  partTwoIrritability = document.querySelector('.part-two-irritability'),
  partTwoTearfulness = document.querySelector('.part-two-tearfulness'),
  partTwoTired = document.querySelector('.part-two-tired'),
  partTwoAggression = document.querySelector('.part-two-aggression'),
  partTwoOther = document.querySelector('.part-two-other'),
  partTwoSexBoy = document.querySelector('.part-two-sex-boy'),
  partTwoSexGirl = document.querySelector('.part-two-sex-girl'),
  timingAge = document.querySelector('.timing-age'),
  birthIndependent = document.querySelector('.birth-independent'),
  birthRetrieved = document.querySelector('.birth-retrieved'),
  birthCaesar = document.querySelector('.birth-caesar'),
  birth = document.querySelector('.birth'),
  birthReason = document.querySelector('.birth-reason'),
  birthAttendanceStimulation = document.querySelector('.birth-attendance-stimulation'),
  birthAttendanceMechanically = document.querySelector('.birth-attendance-mechanically'),
  birthAttendancePliers = document.querySelector('.birth-attendance-pliers'),
  birthAttendanceReadmore = document.querySelector('.birth-attendance-readmore'),
  anesthesiaLocalGeneral = document.querySelector('.anesthesia-local-general'),
  anesthesiaReadmore = document.querySelector('.anesthesia-readmore'),
  screamedAtOnce = document.querySelector('.screamed-at-once'),
  screamedAfterSuction = document.querySelector('.screamed-after-suction'),
  screamedPatting = document.querySelector('.screamed-patting'),
  screamedResuscitation = document.querySelector('.screamed-resuscitation'),
  screamedReadmore = document.querySelector('.screamed-readmore'),
  breech = document.querySelector('.breech'),
  growth = document.querySelector('.growth'),
  weight = document.querySelector('.weight'),
  apgar = document.querySelector('.apgar'),
  feeding = document.querySelector('.feeding'),
  how = document.querySelector('.took-how'),
  waters = document.querySelector('.birth-two-waters'),
  prosecution = document.querySelector('.birth-two-prosecution'),
  hypoxia = document.querySelector('.birth-two-hypoxia'),
  fetus = document.querySelector('.birth-two-fetus'),
  umbilicalCord = document.querySelector('.birth-two-umbilical-cord'),
  infection = document.querySelector('.birth-two-infection'),
  delay = document.querySelector('.birth-two-delay'),
  asphyxiation = document.querySelector('.birth-two-asphyxiation'),
  nothing = document.querySelector('.birth-two-nothing'),
  birthReadmore = document.querySelector('.birth-readmore'),
  conclusion = document.querySelector('.birth-two-conclusion'),
  restlessness = document.querySelector('.uptoayear-restlessness'),
  triangle = document.querySelector('.uptoayear-triangle'),
  handTremor = document.querySelector('.uptoayear-hand-tremor'),
  blushing = document.querySelector('.uptoayear-blushing'),
  hypertonicicty = document.querySelector('.uptoayear-hypertonicicty'),
  violation = document.querySelector('.uptoayear-violation'),
  chinTremor = document.querySelector('.uptoayear-chin-tremor'),
  shudders = document.querySelector('.uptoayear-shudders'),
  hypotonus = document.querySelector('.uptoayear-hypotonus'),
  pulling = document.querySelector('.uptoayear-pulling'),
  screaming = document.querySelector('.uptoayear-screaming'),
  gi = document.querySelector('.uptoayear-gi'),
  colic = document.querySelector('.uptoayear-colic'),
  regurgitation = document.querySelector('.uptoayear-regurgitation'),
  constipation = document.querySelector('.uptoayear-constipation'),
  uptoayearReadmore = document.querySelector('.uptoayear-readmore'),
  held = document.querySelector('.motor-functions-held'),
  set = document.querySelector('.motor-functions-set'),
  turnedOver = document.querySelector('.motor-functions-turned-over'),
  grabbedToys = document.querySelector('.motor-functions-grabbed-toys'),
  crowledSince = document.querySelector('.motor-functions-crowled-since'),
  crowledQuantity = document.querySelector('.motor-functions-crowled-quantity'),
  walkingSince = document.querySelector('.walking-since'),
  debutFalling = document.querySelector('.debut-falling'),
  debutAfraidToWalk = document.querySelector('.debut-afraid-to-walk'),
  debutSlanted = document.querySelector('.debut-slanted'),
  debutRun = document.querySelector('.debut-run'),
  debutOnYourToes = document.querySelector('.debut-on-your-toes'),
  debutReadmore = document.querySelector('.debut-readmore'),
  speechLepetus = document.querySelector('.speech-lepetus'),
  speechWordsFrom = document.querySelector('.speech-words-from'),
  speechPhrases = document.querySelector('.speech-phrases'),
  upToOneSarsAri = document.querySelector('.up-to-one-sars-ari'),
  upToOneOtitis = document.querySelector('.up-to-one-otitis'),
  upToOneMusculoskeletalDisorders = document.querySelector('.up-to-one-musculoskeletal-disorders'),
  upToOneChronicDiseases = document.querySelector('.up-to-one-chronic-diseases'),
  upToOneHeadInjury = document.querySelector('.up-to-one-head-injury'),
  upToOneGeneralAnesthesia = document.querySelector('.up-to-one-general-anesthesia'),
  upToOneDrugsReadmore = document.querySelector('.up-to-one-drugs'),
  upToOneLeadingHand = document.querySelector('.up-to-one-leading-hand'),
  toDateLogoneurosis = document.querySelector('.to-date-logoneurosis'),
  toDateEncopresis = document.querySelector('.to-date-encopresis'),
  toDateVegetativeDisorders = document.querySelector('.to-date-vegetative-disorders'),
  toDateEnuresis = document.querySelector('.to-date-enuresis'),
  toDateFears = document.querySelector('.to-date-fears'),
  toDateFainting = document.querySelector('.to-date-fainting'),
  toDateTics = document.querySelector('.to-date-tics'),
  toDateReadmore = document.querySelector('.to-date-readmore'),
  supervisionSpeechTherapist = document.querySelector('.supervision-speech-therapist'),
  supervisionNeurologist = document.querySelector('.supervision-neurologist'),
  supervisionPsychiatrist = document.querySelector('.supervision-psychiatrist'),
  supervisionReadmore = document.querySelector('.supervision-readmore'),
  leadHandNow = document.querySelector('.lead-hand-now'),
  leadHandRetraining = document.querySelector('.lead-hand-retraining'),
  sleepingHabits = document.querySelector('.sleeping-habits'),
  endingOfBreastfeeding = document.querySelector('.ending-of-breastfeeding'),
  becomeDry = document.querySelector('.become-dry'),
  teachersComplaints = document.querySelector('.teachers-complaints'),
  relationshipsWithOthers = document.querySelector('.relationships-with-others'),
  anythingElse = document.querySelector('.anything-else');
var data = {
  agreementCheckboxField: '',
  childsCodeField: '',
  familyCompositionField: '',
  complaintsField: '',
  environmentSchoolField: '',
  environmentKindergartenField: '',
  environmentHomeField: '',
  momAgeField: '',
  dadAgeField: '',
  infertilityField: '',
  failedPregnancyField: '',
  threatenedAbortionField: '',
  partOneToxicosisField: '',
  partOneBleedingField: '',
  partOnePastInfectionsField: '',
  partOneAnemiaField: '',
  partOneAriGrippField: '',
  partOneNothingField: '',
  partOneOtherField: '',
  partTwoToxicosisField: '',
  partTwoAnemiaField: '',
  partTwoNephropathyField: '',
  partTwoRapidWeightGainField: '',
  partTwoLowBloodPressureField: '',
  partTwoHighBloodPressureField: '',
  partTwoNothingField: '',
  partTwoAggravationField: '',
  partTwoPsychotraumaticSituationsField: '',
  partTwoIrritabilityField: '',
  partTwoTearfulnessField: '',
  partTwoTiredField: '',
  partTwoAggressionField: '',
  partTwoOtherField: '',
  partTwoSexBoyField: '',
  partTwoSexGirlField: '',
  timingAgeField: '',
  birthIndependentField: '',
  birthRetrievedField: '',
  birthCaesarField: '',
  birthField: '',
  birthReasonField: '',
  birthAttendanceStimulationField: '',
  birthAttendanceMechanicallyField: '',
  birthAttendancePliersField: '',
  birthAttendanceReadmoreField: '',
  anesthesiaLocalGeneralField: '',
  anesthesiaReadmoreField: '',
  screamedAtOnceField: '',
  screamedAfterSuctionField: '',
  screamedPattingField: '',
  screamedResuscitationField: '',
  screamedReadmoreField: '',
  breechField: '',
  growthField: '',
  weightField: '',
  apgarField: '',
  feedingField: '',
  howField: '',
  watersField: '',
  prosecutionField: '',
  hypoxiaField: '',
  fetusField: '',
  umbilicalCordField: '',
  infectionField: '',
  delayField: '',
  asphyxiationField: '',
  nothingField: '',
  birthReadmoreField: '',
  conclusionField: '',
  restlessnessField: '',
  triangleField: '',
  handTremorField: '',
  blushingField: '',
  hypertonicictyField: '',
  violationField: '',
  chinTremorField: '',
  shuddersField: '',
  hypotonusField: '',
  pullingField: '',
  screamingField: '',
  giField: '',
  colicField: '',
  regurgitationField: '',
  constipationField: '',
  uptoayearReadmoreField: '',
  heldField: '',
  setField: '',
  turnedOverField: '',
  grabbedToysField: '',
  crowledSinceField: '',
  crowledQuantityField: '',
  walkingSinceField: '',
  debutFallingField: '',
  debutAfraidToWalkField: '',
  debutSlantedField: '',
  debutRunField: '',
  debutOnYourToesField: '',
  debutReadmoreField: '',
  speechLepetusField: '',
  speechWordsFromField: '',
  speechPhrasesField: '',
  upToOneSarsAriField: '',
  upToOneOtitisField: '',
  upToOneMusculoskeletalDisordersField: '',
  upToOneChronicDiseasesField: '',
  upToOneHeadInjuryField: '',
  upToOneGeneralAnesthesiaField: '',
  upToOneDrugsReadmoreField: '',
  upToOneLeadingHandField: '',
  toDateLogoneurosisField: '',
  toDateEncopresisField: '',
  toDateVegetativeDisordersField: '',
  toDateEnuresisField: '',
  toDateFearsField: '',
  toDateFaintingField: '',
  toDateTicsField: '',
  toDateReadmoreField: '',
  supervisionSpeechTherapistField: '',
  supervisionNeurologistField: '',
  supervisionPsychiatristField: '',
  supervisionReadmoreField: '',
  leadHandNowField: '',
  leadHandRetrainingField: '',
  sleepingHabitsField: '',
  endingOfBreastfeedingField: '',
  becomeDryField: '',
  teachersComplaintsField: '',
  relationshipsWithOthersField: '',
  anythingElseField: ''
};
function setData() {
  localStorage.setItem('data', JSON.stringify(data));
  data.agreementCheckboxField = agreementCheckbox.checked;
  data.childsCodeField = childsCode.value;
  data.familyCompositionField = familyComposition.value;
  data.complaintsField = complaints.value;
  data.environmentSchoolField = environmentSchool.checked;
  data.environmentKindergartenField = environmentKindergarten.checked;
  data.environmentHomeField = environmentHome.checked;
  data.momAgeField = momAge.value;
  data.dadAgeField = dadAge.value;
  data.infertilityField = infertility.checked;
  data.failedPregnancyField = failedPregnancy.checked;
  data.threatenedAbortionField = threatenedAbortion.checked;
  data.partOneToxicosisField = partOneToxicosis.checked;
  data.partOneBleedingField = partOneBleeding.checked;
  data.partOnePastInfectionsField = partOnePastInfections.checked;
  data.partOneAnemiaField = partOneAnemia.checked;
  data.partOneAriGrippField = partOneAriGripp.checked;
  data.partOneNothing = partOneNothing.checked;
  data.partOneOtherField = partOneOther.value;
  data.partTwoToxicosisField = partTwoToxicosis.checked;
  data.partTwoAnemiaField = partTwoAnemia.checked;
  data.partTwoNephropathyField = partTwoNephropathy.checked;
  data.partTwoRapidWeightGainField = partTwoRapidWeightGain.checked;
  data.partTwoLowBloodPressureField = partTwoLowBloodPressure.checked;
  data.partTwoHighBloodPressureField = partTwoHighBloodPressure.checked;
  data.partTwoNothingField = partTwoNothing.checked;
  data.partTwoAggravationField = partTwoAggravation.value;
  data.partTwoPsychotraumaticSituationsField = partTwoPsychotraumaticSituations.value;
  data.partTwoIrritabilityField = partTwoIrritability.checked;
  data.partTwoTearfulnessField = partTwoTearfulness.checked;
  data.partTwoTiredField = partTwoTired.checked;
  data.partTwoAggressionField = partTwoAggression.checked;
  data.partTwoOtherField = partTwoOther.value;
  data.partTwoSexBoyField = partTwoSexBoy.checked;
  data.partTwoSexGirlField = partTwoSexGirl.checked;
  data.timingAgeField = timingAge.value;
  data.birthIndependentField = birthIndependent.checked;
  data.birthRetrievedField = birthRetrieved.checked;
  data.birthCaesarField = birthCaesar.checked;
  data.birthField = birth.checked;
  data.birthReasonField = birthReason.value;
  data.birthAttendanceStimulationField = birthAttendanceStimulation.checked;
  data.birthAttendanceMechanicallyField = birthAttendanceMechanically.checked;
  data.birthAttendancePliersField = birthAttendancePliers.checked;
  data.birthAttendanceReadmoreField = birthAttendanceReadmore.value;
  data.anesthesiaLocalGeneralField = anesthesiaLocalGeneral.checked;
  data.anesthesiaReadmoreField = anesthesiaReadmore.value;
  data.screamedAtOnceField = screamedAtOnce.checked;
  data.screamedAfterSuctionField = screamedAfterSuction.checked;
  data.screamedPattingField = screamedPatting.checked;
  data.screamedResuscitationField = screamedResuscitation.checked;
  data.screamedReadmoreField = screamedReadmore.checked;
  data.breechField = breech.checked;
  data.growthField = growth.value;
  data.weightField = weight.value;
  data.apgarField = apgar.value;
  data.feedingField = feeding.value;
  data.howField = how.checked;
  data.watersField = waters.checked;
  data.prosecutionField = prosecution.checked;
  data.hypoxiaField = hypoxia.checked;
  data.fetusField = fetus.checked;
  data.umbilicalCordField = umbilicalCord.checked;
  data.infectionField = infection.checked;
  data.delayField = delay.checked;
  data.asphyxiationField = asphyxiation.checked;
  data.nothingField = nothing.checked;
  data.birthReadmoreField = birthReadmore.value;
  data.conclusionField = conclusion.value;
  data.restlessnessField = restlessness.checked;
  data.triangleField = triangle.checked;
  data.handTremorField = handTremor.checked;
  data.blushingField = blushing.value;
  data.hypertonicictyField = hypertonicicty.checked;
  data.violationField = violation.checked;
  data.chinTremorField = chinTremor.checked;
  data.shuddersField = shudders.checked;
  data.hypotonusField = hypotonus.checked;
  data.pullingField = pulling.checked;
  data.screamingField = screaming.checked;
  data.giField = gi.checked;
  data.colicField = colic.checked;
  data.regurgitationField = regurgitation.checked;
  data.constipationField = constipation.checked;
  data.uptoayearReadmoreField = uptoayearReadmore.value;
  data.heldField = held.value;
  data.setField = set.value;
  data.turnedOverField = turnedOver.value;
  data.grabbedToysField = grabbedToys.value;
  data.crowledSinceField = crowledSince.value;
  data.crowledQuantityField = crowledQuantity.value;
  data.walkingSinceField = walkingSince.value;
  data.debutFallingField = debutFalling.checked;
  data.debutAfraidToWalkField = debutAfraidToWalk.checked;
  data.debutSlantedField = debutSlanted.checked;
  data.debutRunField = debutRun.checked;
  data.debutOnYourToesField = debutOnYourToes.checked;
  data.debutReadmoreField = debutReadmore.value;
  data.speechLepetusField = speechLepetus.value;
  data.speechWordsFromField = speechWordsFrom.value;
  data.speechPhrasesField = speechPhrases.value;
  data.toDateLogoneurosisField = toDateLogoneurosis.checked;
  data.toDateEncopresisField = toDateEncopresis.checked;
  data.toDateVegetativeDisordersField = toDateVegetativeDisorders.checked;
  data.toDateEnuresisField = toDateEnuresis.checked;
  data.toDateFearsField = toDateFears.checked;
  data.toDateFaintingField = toDateFainting.checked;
  data.toDateTicsField = toDateTics.checked;
  data.toDateReadmoreField = toDateReadmore.value;
  data.upToOneSarsAriField = upToOneSarsAri.checked;
  data.upToOneOtitisField = upToOneOtitis.checked;
  data.upToOneMusculoskeletalDisordersField = upToOneMusculoskeletalDisorders.checked;
  data.upToOneChronicDiseasesField = upToOneChronicDiseases.checked;
  data.upToOneHeadInjuryField = upToOneHeadInjury.checked;
  data.upToOneGeneralAnesthesiaField = upToOneGeneralAnesthesia.checked;
  data.upToOneDrugsReadmoreField = upToOneDrugsReadmore.value;
  data.upToOneLeadingHandField = upToOneLeadingHand.value;
  data.toDateLogoneurosisField = toDateLogoneurosis.checked;
  data.toDateEncopresisField = toDateEncopresis.checked;
  data.toDateVegetativeDisordersField = toDateVegetativeDisorders.checked;
  data.toDateEnuresisField = toDateEnuresis.checked;
  data.toDateFearsField = toDateFears.checked;
  data.toDateFaintingField = toDateFainting.checked;
  data.toDateTicsField = toDateTics.checked;
  data.toDateReadmoreField = toDateReadmore.value;
  data.supervisionSpeechTherapistField = supervisionSpeechTherapist.checked;
  data.supervisionNeurologistField = supervisionNeurologist.checked;
  data.supervisionPsychiatristField = supervisionPsychiatrist.checked;
  data.supervisionReadmoreField = supervisionReadmore.value;
  data.leadHandNowField = leadHandNow.checked;
  data.leadHandRetrainingField = leadHandRetraining.checked;
  data.sleepingHabitsField = sleepingHabits.value;
  data.endingOfBreastfeedingField = endingOfBreastfeeding.value;
  data.becomeDryField = becomeDry.value;
  data.teachersComplaintsField = teachersComplaints.value;
  data.relationshipsWithOthersField = relationshipsWithOthers.value;
  data.anythingElseField = anythingElse.value;
}
function getData() {
  var data = JSON.parse(localStorage.getItem('data'));
  agreementCheckbox.checked = data.agreementCheckboxField;
  childsCode.value = data.childsCodeField;
  familyComposition.value = data.familyCompositionField;
  complaints.value = data.complaintsField;
  environmentSchool.checked = data.environmentSchoolField;
  environmentKindergarten.checked = data.environmentKindergartenField;
  environmentHome.checked = data.environmentHomeField;
  momAge.value = data.momAgeField;
  dadAge.value = data.dadAgeField;
  infertility.checked = data.infertilityField;
  failedPregnancy.checked = data.failedPregnancyField;
  threatenedAbortion.checked = data.threatenedAbortionField;
  partOneToxicosis.checked = data.partOneToxicosisField;
  partOneBleeding.checked = data.partOneBleedingField;
  partOnePastInfections.checked = data.partOnePastInfectionsField;
  partOneAnemia.checked = data.partOneAnemiaField;
  partOneAriGripp.checked = data.partOneAriGrippField;
  partOneNothing.checked = data.partOneNothingField;
  partOneOther.value = data.partOneOtherField;
  partTwoToxicosis.checked = data.partTwoToxicosisField;
  partTwoAnemia.checked = data.partTwoAnemiaField;
  partTwoNephropathy.checked = data.partTwoNephropathyField;
  partTwoRapidWeightGain.checked = data.partTwoRapidWeightGainField;
  partTwoLowBloodPressure.checked = data.partTwoLowBloodPressureField;
  partTwoHighBloodPressure.checked = data.partTwoHighBloodPressureField;
  partTwoNothing.checked = data.partTwoNothingField;
  partTwoAggravation.value = data.partTwoAggravationField;
  partTwoPsychotraumaticSituations.value = data.partTwoPsychotraumaticSituationsField;
  partTwoIrritability.checked = data.partTwoIrritabilityField;
  partTwoTearfulness.checked = data.partTwoTearfulnessField;
  partTwoTired.checked = data.partTwoTiredField;
  partTwoAggression.checked = data.partTwoAggressionField;
  partTwoOther.value = data.partTwoOtherField;
  partTwoSexBoy.checked = data.partTwoSexBoyField;
  partTwoSexGirl.checked = data.partTwoSexGirlField;
  timingAge.value = data.timingAgeField;
  birthIndependent.checked = data.birthIndependentField;
  birthRetrieved.checked = data.birthRetrievedField;
  birthCaesar.checked = data.birthCaesarField;
  birth.checked = data.birthField;
  birthReason.value = data.birthReasonField;
  birthAttendanceStimulation.checked = data.birthAttendanceStimulationField;
  birthAttendanceMechanically.checked = data.birthAttendanceMechanicallyField;
  birthAttendancePliers.checked = data.birthAttendancePliersField;
  birthAttendanceReadmore.value = data.birthAttendanceReadmoreField;
  anesthesiaLocalGeneral.checked = data.anesthesiaLocalGeneralField;
  anesthesiaReadmore.value = data.anesthesiaReadmoreField;
  screamedAtOnce.checked = data.screamedAtOnceField;
  screamedAfterSuction.checked = data.screamedAfterSuctionField;
  screamedPatting.checked = data.screamedPattingField;
  screamedResuscitation.checked = data.screamedResuscitationField;
  screamedReadmore.checked = data.screamedReadmoreField;
  breech.checked = data.breechField;
  growth.value = data.growthField;
  weight.value = data.weightField;
  apgar.value = data.apgarField;
  feeding.value = data.feedingField;
  how.checked = data.howField;
  waters.checked = data.watersField;
  prosecution.checked = data.prosecutionField;
  hypoxia.checked = data.hypoxiaField;
  fetus.checked = data.fetusField;
  umbilicalCord.checked = data.umbilicalCordField;
  infection.checked = data.infectionField;
  delay.checked = data.delayField;
  asphyxiation.checked = data.asphyxiationField;
  nothing.checked = data.nothingField;
  birthReadmore.value = data.birthReadmoreField;
  conclusion.value = data.conclusionField;
  restlessness.checked = data.restlessnessField;
  triangle.checked = data.triangleField;
  handTremor.checked = data.handTremorField;
  blushing.checked = data.blushingField;
  hypertonicicty.checked = data.hypertonicictyField;
  violation.checked = data.violationField;
  chinTremor.checked = data.chinTremorField;
  shudders.checked = data.shuddersField;
  hypotonus.checked = data.hypotonusField;
  pulling.checked = data.pullingField;
  screaming.checked = data.screamingField;
  gi.checked = data.giField;
  colic.checked = data.colicField;
  regurgitation.checked = data.regurgitationField;
  constipation.checked = data.constipationField;
  uptoayearReadmore.value = data.uptoayearReadmoreField;
  held.value = data.heldField;
  set.value = data.setField;
  turnedOver.value = data.turnedOverField;
  grabbedToys.value = data.grabbedToysField;
  crowledQuantity.value = data.crowledQuantityField;
  walkingSince.value = data.walkingSinceField;
  debutFalling.checked = data.debutFallingField;
  debutAfraidToWalk.checked = data.debutAfraidToWalkField;
  debutSlanted.checked = data.debutSlantedField;
  debutRun.checked = data.debutRunField;
  debutOnYourToes.checked = data.debutRunField;
  debutReadmore.value = data.debutReadmoreField;
  speechLepetus.value = data.speechLepetusField;
  speechWordsFrom.value = data.speechWordsFromField;
  speechPhrases.value = data.speechPhrasesField;
  toDateEncopresis.checked = data.toDateEncopresisField;
  toDateVegetativeDisorders.checked = data.toDateVegetativeDisordersField;
  toDateEnuresis.checked = data.toDateEnuresisField;
  toDateFears.checked = data.toDateFearsField;
  toDateFainting.checked = data.toDateFaintingField;
  toDateTics.checked = data.toDateTicsField;
  toDateReadmore.checked = data.toDateReadmoreField;
  upToOneSarsAri.checked = data.upToOneSarsAriField;
  upToOneMusculoskeletalDisorders.checked = data.upToOneMusculoskeletalDisordersField;
  upToOneOtitis.checked = data.upToOneOtitisField;
  upToOneChronicDiseases.checked = data.upToOneChronicDiseasesField;
  upToOneHeadInjury.checked = data.upToOneHeadInjuryField;
  upToOneGeneralAnesthesia.checked = data.upToOneGeneralAnesthesiaField;
  upToOneDrugsReadmore.value = data.upToOneDrugsReadmoreField;
  upToOneLeadingHand.value = data.upToOneLeadingHandField;
  toDateLogoneurosis.checked = data.toDateLogoneurosisField;
  toDateEncopresis.checked = data.toDateEncopresisField;
  toDateVegetativeDisorders.checked = data.toDateVegetativeDisordersField;
  toDateEnuresis.checked = data.toDateEnuresisField;
  toDateFears.checked = data.toDateFearsField;
  toDateFainting.checked = data.toDateFaintingField;
  toDateTics.checked = data.toDateFaintingTics;
  toDateReadmore.value = data.toDateReadmoreField;
  supervisionSpeechTherapist.checked = data.supervisionSpeechTherapistField;
  supervisionNeurologist.checked = data.supervisionNeurologistField;
  supervisionPsychiatrist.checked = data.supervisionPsychiatristField;
  supervisionReadmore.value = data.supervisionReadmoreField;
  leadHandNow.checked = data.leadHandNowField;
  leadHandRetraining.checked = data.leadHandRetrainingField;
  sleepingHabits.value = data.sleepingHabitsField;
  endingOfBreastfeeding.value = data.endingOfBreastfeedingField;
  becomeDry.value = data.becomeDryField;
  teachersComplaints.value = data.teachersComplaintsField;
  relationshipsWithOthers.value = data.relationshipsWithOthersField;
  anythingElse.value = data.anythingElseField;
}
input.forEach(function (item) {
  item.addEventListener('keydown', function () {
    // e.preventDefault();
    setData();
  });
});
inputRadio.forEach(function (item) {
  item.addEventListener('click', function () {
    setData();
  });
});
inputCheckbox.forEach(function (item) {
  item.addEventListener('click', function () {
    setData();
  });
});
getData();

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_img_img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/img/img */ "./src/blocks/components/img/img.js");
/* harmony import */ var _components_img_img__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_img_img__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/burger/burger */ "./src/blocks/components/burger/burger.js");
/* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_burger_burger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %components%/form/form */ "./src/blocks/components/form/form.js");
//! Basic





//! Other

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_quiz_quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/quiz/quiz */ "./src/blocks/modules/quiz/quiz.js");
/* harmony import */ var _modules_quiz_quiz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_quiz_quiz__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_pug_starter"] = self["webpackChunkgulp_pug_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map