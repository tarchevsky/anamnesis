<?php 
$agreement = $_POST['agreement-input']; // Согласие на использование персональных данных дал
$childsCode = $_POST['childs-code']; // Код
$familyComposition = $_POST['family-composition']; // Состав семьи
$complaints = $_POST['complaints']; // Жалобы
$environmentSchool = $_POST['environment-school']; // Социальная среда,  в которой находится ребенок. Школа
$environmentKindergarten = $_POST['environment-kindergarten']; // Социальная среда,  в которой находится ребенок. Детский сад
$environmentHome = $_POST['environment-home']; // Социальная среда,  в которой находится ребенок. Дом
$momAge = $_POST['mom-age']; // Возраст матери
$dadAge = $_POST['dad-age']; // Возраст отца
$infertility = $_POST['infertility']; // Имело место лечение по поводу бесплодия
$failedPregnancy = $_POST['failed-pregnancy']; // Замершая беременность
$threatenedAbortion = $_POST['threatened-abortion']; // Угроза прерывания беременности
$partOneToxicosis = $_POST['part-one-toxicosis']; // Течение беременности. Первая половина. Токсикоз
$partOneBleeding = $_POST['part-one-bleeding']; // Течение беременности. Первая половина. Кровотечение
$partOnePastInfections = $_POST['part-one-past-infections']; // Течение беременности. Первая половина. Перенесенные инфекции
$partOneAnemia = $_POST['part-one-anemia']; // Течение беременности. Первая половина. Анемия
$partOneAriGripp = $_POST['part-one-ari-gripp']; // Течение беременности. Первая половина. ОРЗ, ГРИПП
$partOneNothing = $_POST['part-one-nothing']; // Течение беременности. Первая половина. Ничего из перечисленного
$partOneOther = $_POST['part-one-other']; // Течение беременности. Первая половина. Другое
$partTwoToxicosis = $_POST['part-two-toxicosis']; // Течение беременности. Вторая половина. Токсикоз
$partTwoAnemia = $_POST['part-two-anemia']; // Течение беременности. Вторая половина. Анемия
$partTwoNephropathy = $_POST['part-two-nephropathy']; // Течение беременности. Вторая половина. Нефропатия
$partTwoRapidWeightGain = $_POST['part-two-rapid-weight-gain']; // Течение беременности. Вторая половина. Быстрый набор веса
$partTwoLowBloodPressure = $_POST['part-two-low-blood-pressure']; // Течение беременности. Вторая половина. Понижение артериального давления
$partTwoHighBloodPressure = $_POST['part-two-high-blood-pressure']; // Течение беременности. Вторая половина. Повышение артериального давления
$partTwoNothing = $_POST['part-two-nothing']; // Течение беременности. Вторая половина. Ничего из перечисленного
$partTwoAggravation = $_POST['part-two-aggravation']; // Течение беременности. Вторая половина. Обострение хронических заболеваний
$partTwoPsychotraumaticSituations = $_POST['part-two-psychotraumatic-situations']; // Течение беременности. Вторая половина. Психотравмирующие ситуации
$partTwoIrritability = $_POST['part-two-irritability']; // Течение беременности. Вторая половина. Психологическое состояние во время беременности. раздражительность
$partTwoTearfulness = $_POST['part-two-tearfulness']; // Течение беременности. Вторая половина. Психологическое состояние во время беременности. плаксивость
$partTwoTired = $_POST['part-two-tired']; // Течение беременности. Вторая половина. постоянное Психологическое состояние во время беременности. чувство усталости
$partTwoAggression = $_POST['part-two-aggression']; // Течение беременности. Вторая половина. Психологическое состояние во время беременности. агрессия
$partTwoOther = $_POST['part-two-other']; // Течение беременности. Вторая половина. Психологическое состояние во время беременности. Другое
$partTwoSexBoy = $_POST['part-two-sex-boy']; // Течение беременности. Вторая половина. Ожидаемый пол. Мальчик
$partTwoSexGirl = $_POST['part-two-sex-girl']; // Течение беременности. Вторая половина. Ожидаемый пол. Девочка
$timingAge = $_POST['timing-age']; // Роды наступили на сроке
$birthIndependent = $_POST['birth-independent']; // Роды. Самостоятельные
$birthRetrieved = $_POST['birth-retrieved']; // Роды. Вызваны
$birthCaesar = $_POST['birth-сaesar']; // Роды. Оперативные (кесарево сечение). Кесарево
$birth = $_POST['birth']; // Роды. Оперативные (кесарево сечение).
$birthReason = $_POST['birth-reason']; // Роды. Оперативные (кесарево сечение). По причине
$birthAttendanceStimulation = $_POST['birth-attendance-stimulation']; // Родовспоможение. Стимуляция
$birthAttendanceMechanically = $_POST['birth-attendance-mechanically']; // Родовспоможение. механическое выдавливание плода
$birthAttendancePliers = $_POST['birth-attendance-pliers']; // Родовспоможение. щипцы
$birthAttendanceReadmore = $_POST['birth-attendance-readmore']; // Родовспоможение. другое
$anesthesiaLocalGeneral = $_POST['anesthesia-local-general']; // Анастезия. Местная
$anesthesiaGeneralGeneral = $_POST['anesthesia-local-general']; // Анастезия. Общая
$anesthesiaReadmore = $_POST['anesthesia-readmore']; // Родовая деятельность. Анестезия. Подробнее
$screamedAtOnce = $_POST['screamed-at-once']; // Ребенок закричал: Сразу
$screamedAfterSuction = $_POST['screamed-after-suction']; // Ребенок закричал: После отсасывания слизи
$screamedPatting = $_POST['screamed-patting']; // Ребенок закричал: после похлопывания
$screamedResuscitation = $_POST['screamed-resuscitation']; // Ребенок закричал: проводилась реанимация
$screamedReadmore = $_POST['screamed-readmore']; // Ребенок закричал: Подробнее
$breech = $_POST['breech']; // Подлежание
$growth = $_POST['growth']; // Рост
$weight = $_POST['weight']; // Вес
$apgar = $_POST['apgar']; // Оценка по шкале Апгар
$feeding = $_POST['feeding']; // Первое кормление наступило на
$howActively = $_POST['how-actively']; // Грудь взял активно
$howSluggishly = $_POST['how-sluggishly']; // Грудь взял вяло
$howRefused = $_POST['how-refused']; // Грудь взял отказался
$waters = $_POST['waters']; // Зелёные околоплодные воды
$prosecution = $_POST['prosecution']; // обвитие пуповины вокруг шеи или туловища
$hypoxia = $_POST['hypoxia']; // гипоксия
$fetus = $_POST['fetus']; // крупный плод
$umbilicalCord = $_POST['umbilical-cord']; // короткая пуповина
$infection = $_POST['infection']; // внутриутробная инфекция
$delay = $_POST['delay']; // внутриутробная задержка развития (ВУЗР)
$asphyxiation = $_POST['asphyxiation']; // асфиксия
$nothing = $_POST['nothing']; // ничего из перечисленного
$birthReadmore = $_POST['birth-readmore']; // При рождении имело место: подробнее
$conclusion = $_POST['conclusion']; // Заключение после стационара
$restlessness = $_POST['restlessness']; // Развитие до года. Наблюдалось: двигательное беспокойство
$triangle = $_POST['triangle']; // Развитие до года. Наблюдалось: синел/бледнел носогубный треугольник
$handTremor = $_POST['hand-tremor']; // Развитие до года. Наблюдалось: тремор ручек
$blushing = $_POST['blushing']; // Развитие до года. Наблюдалось: сильно краснел при плаче
$hypertonicicty = $_POST['hypertonicicty']; // Развитие до года. Наблюдалось: гипертонус
$violation = $_POST['violation']; // Развитие до года. Наблюдалось: нарушения режима сна
$chinTremor = $_POST['chin-tremor']; // Развитие до года. Наблюдалось: тремор подбородка
$shudders = $_POST['shudders']; // Развитие до года. Наблюдалось: вздрагивания
$hypotonus = $_POST['hypotonus']; // Развитие до года. Наблюдалось: гипотонус
$pulling = $_POST['pulling']; // Развитие до года. Наблюдалось: оттягивание головы назад
$screaming = $_POST['screaming']; // Развитие до года. Наблюдалось: закатывался при плаче
$gi = $_POST['gi']; // Развитие до года. Наблюдалось: функциональная незрелость ЖКТ
$colic = $_POST['colic']; // Развитие до года. Наблюдалось: кишечная колика
$regurgitation = $_POST['regurgitation']; // Развитие до года. Наблюдалось: срыгивания
$constipation = $_POST['constipation']; // Развитие до года. Наблюдалось: запоры
$uptoayearNothing= $_POST['uptoayear-nothing']; // Развитие до года. Наблюдалось: ничего из перечисленного
$uptoayearReadmore = $_POST['uptoayear-readmore']; // Развитие до года. Наблюдалось: другое
$held = $_POST['held']; // Моторные функции: Держал голову с
$set = $_POST['set']; // Моторные функции: Самостоятельно садился
$turnedOver = $_POST['turned-over']; // Моторные функции: Самостоятельно переворачивался
$grabbedToys = $_POST['grabbed-toys']; // Моторные функции: Хватал игрушки с
$crowledSince = $_POST['crowled-since']; // Моторные функции: Ползал с
$crowledQuantity = $_POST['crowled-quantity']; // Моторные функции: Ползал (много/мало/не ползал вообще)
$walkingSince = $_POST['walking-since']; // Моторные функции: Самостоятельно ходить начал с
$debutFalling = $_POST['debut-falling']; // Моторные функции. Особенности дебюта ходьбы. часто падал
$debutAfraidToWalk = $_POST['debut-afraid-to-walk']; // Моторные функции. Особенности дебюта ходьбы. боялся самостоятельно ходить
$debutSlanted = $_POST['debut-slanted']; // Моторные функции. Особенности дебюта ходьбы. “косолапил”
$debutRun = $_POST['debut-run']; // Моторные функции. Особенности дебюта ходьбы. сразу побежал
$debutOnYourToes = $_POST['debut-on-your-toes']; // Моторные функции. Особенности дебюта ходьбы. на “мысочках”
$debutReadmore = $_POST['debut-readmore']; // Моторные функции. Особенности дебюта ходьбы. подробнее
$speechLepetus = $_POST['speech-lepetus']; // Речевое развитие: Лепет с
$speechWordsFrom = $_POST['speech-words-from']; // Речевое развитие: Слов с
$speechPhrases = $_POST['speech-phrases']; // Речевое развитие: Фразы с
$upToOneSarsAri = $_POST['up-to-one-sars-ari']; // Ранний период. До 1 года. ОРЗ / ОРВИ
$upToOneOtitis = $_POST['up-to-one-otitis']; // Ранний период. До 1 года. отит
$upToOneMusculoskeletalDisorders = $_POST['up-to-one-musculoskeletal-disorders']; // Ранний период. До 1 года. нарушения опорно-двигательного аппарата
$upToOneChronicDiseases = $_POST['up-to-one-chronic-diseases']; // Ранний период. До 1 года. хронические заболевания
$upToOneHeadInjury = $_POST['up-to-one-head-injury']; // Ранний период. До 1 года. травмы головы
$upToOneGeneralAnesthesia = $_POST['up-to-one-general-anesthesia']; // Ранний период. До 1 года. операции под общим наркозом
$upToOneDrugsReadmore = $_POST['up-to-one-drugs']; // Ранний период. До 1 года. рассказать подробнее, уточнить периодичность
$upToOneDrugs = $_POST['up-to-one-drugs']; // Ранний период. Какие лекарственные препараты ребенок принимал до года:
$upToOneLeadingHand = $_POST['up-to-one-leading-hand']; // Ранний период. Какой рукой предпочтительно манипулировал до года:
$toDateLogoneurosis = $_POST['to-date-logoneurosis']; // От года по настоящее время. Имели место: логоневроз
$toDateEncopresis = $_POST['to-date-encopresis']; // От года по настоящее время. Имели место: энкопрез
$toDateVegerativeDisorders = $_POST['to-date-vegerative-disorders']; // От года по настоящее время. Имели место: вегетативные расстройства
$toDateEnuresis = $_POST['to-date-enuresis']; // РОт года по настоящее время. Имели место: энурез
$toDateFears = $_POST['to-date-fears']; // От года по настоящее время. Имели место: страхи
$toDateFainting = $_POST['to-date-fainting']; // От года по настоящее время. Имели место: обмороки
$toDateTics = $_POST['to-date-tics']; // От года по настоящее время. Имели место: тики
$toDateNothing = $_POST['to-date-nothing']; // От года по настоящее время. Имели место: ничего из перечисленного
$toDateReadmore = $_POST['to-date-readmore']; // От года по настоящее время. Имели место: рассказать подробнее
$toDateLogoneurosis = $_POST['to-date-logoneurosis']; //  От года по настоящее время. Часть 1. Имели место: логоневроз
$toDateDncopresis = $_POST['to-date-encopresis']; //  От года по настоящее время. Часть 1. Имели место: энкопрез
$toDateVegetativeDisorders = $_POST['to-date-vegetative-disorders']; //  От года по настоящее время. Часть 1. Имели место: вегетативные расстройства
$toDateDnuresis = $_POST['to-date-enuresis']; //  От года по настоящее время. Часть 1. Имели место: энурез
$toDateFears = $_POST['to-date-fears']; //  От года по настоящее время. Часть 1. Имели место: страхи
$toDateFainting = $_POST['to-date-fainting']; //  От года по настоящее время. Часть 1. Имели место: обмороки
$toDateReadmore = $_POST['to-date-readmore']; //  От года по настоящее время. Часть 1. Имели место: рассказать подробнее
$supervisionSpeechTherapist = $_POST['supervision-speech-therapist']; //  От года по настоящее время. Часть 1. Наблюдается ли ребенок специалистом? логопед
$supervisionNeurologist = $_POST['supervision-neurologist']; //  От года по настоящее время. Часть 1. Наблюдается ли ребенок специалистом? невролог
$supervisionPsychiatrist = $_POST['supervision-psychiatrist']; //  От года по настоящее время. Часть 1. Наблюдается ли ребенок специалистом? психиатр
$supervisionReadmore = $_POST['supervision-readmore']; //  От года по настоящее время. Часть 1. Наблюдается ли ребенок специалистом? кратко опишите причину обращения к специалисту
$leadHandNow = $_POST['lead-hand-now']; //  От года по настоящее время. Часть 1. Какой рукой предпочтительно манипулирует в настоящее время?
$leadHandRetraining = $_POST['lead-hand-retraining']; //  От года по настоящее время. Часть 2. Имело ли место переучивание на другую руку?
$sleepingHabits = $_POST['sleeping-habits']; //  От года по настоящее время. Часть 2. Особенности сна, засыпания:
$endingOfBreastfeeding = $_POST['ending-of-breastfeeding']; //  От года по настоящее время. Часть 2. Грудное вскармливание завершили в возрасте
$becomeDry = $_POST['become-dry']; //  От года по настоящее время. Часть 2. Самостоятельно садился на горшок с возраста
$teachersComplaints = $_POST['teachers-complaints']; //  От года по настоящее время. Часть 2. Жалобы от учителя / воспитателя / педагога кружков
$relationshipsWithOthers = $_POST['relationships-with-others']; //  От года по настоящее время. Часть 2. Взаимоотношения с окружающими
$anythingElse = $_POST['anything-else']; //  Есть ли что-то, что вам хотелось бы добавить? Расскажите, что считаете нужным

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'marybelova-psy@yandex.ru';                 // Наш логин
$mail->Password = 'pklliiewyjlwzrwt';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('marybelova-psy@yandex.ru', 'Квиз - Анамнез');   // От кого письмо
$mail->addAddress('marybelova-psy@yandex.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Анамнез ' . $childsCode . '';
$mail->Body    = '
    <h1 style="font-size: 34px;">Знакомство</h1> <br>
    <strong>Согласие на работу с персональными данными:</strong> ' . $agreement . ' <br>
    <strong>Код:</strong> ' . $childsCode . ' <br>
    <strong>Состав семьи:</strong> ' . $familyComposition . '<br>
    <strong>Социальная среда,  в которой находится ребенок (школа / детский сад):</strong> ' . $environmentSchool . ' ' . $environmentKindergarten . ' ' . $environmentHome . ' <br>
    <strong>Что вас ко мне привело? Укажите основные жалобы:</strong> ' . $complaints . '<br>
    <strong>На момент начала беременности возраст(матери / отца): мать:</strong> ' . $momAge . ' / отец: ' . $dadAge .'<br>
    <strong>Имело место лечение по поводу бесплодия</strong>: ' . $infertility . '<br>
    <strong>Замершая беременность</strong>: ' . $failedPregnancy . ' <br>
    <strong>Угроза прерывания беременности</strong>: ' . $threatenedAbortion . ' <br>
    <strong>Течение беременности I </strong>: ' . $partOneToxicosis . ' ' . $partOneBleeding . ' ' . $partOnePastInfections . ' ' . $partOneAnemia . ' ' . $partOneAriGripp . ' ' . $partOneNothing . ' другое: ' . $partOneOther . ' <br>
    <strong>Течение беременности II</strong>: ' . $partTwoToxicosis . ' ' . $partTwoAnemia . ' ' . $partTwoNephropathy . ' ' . $partTwoRapidWeightGain . ' ' . $partTwoLowBloodPressure . ' ' . $partTwoHighBloodPressure . ' ' . $partTwoNothing . ' <br>
    <strong>Течение беременности II. Обострение хронических заболеваний</strong>: ' . $partTwoAggravation . ' <br>
    <strong>Течение беременности II. Психотравмирующие ситуации</strong>: ' . $partTwoPsychotraumaticSituations . ' <br>
    <strong>Течение беременности II. Психологическое состояние на момент беременности</strong>: ' . $partTwoIrritability . ' ' . $partTwoTearfulness . ' ' . $partTwoTired . ' ' . $partTwoAggression . ' Другое: ' . $partTwoOther . ' <br>
    <strong>Течение беременности II. Ожидаемый пол ребёнка</strong>: ' . $partTwoSexBoy . ' ' . $partTwoSexGirl . ' <br>
    <strong>Родовая деятельность. Роды наступили на сроке:</strong> ' . $timingAge . ' <br>
    <strong>Родовая деятельность. Роды:</strong> ' . $birthIndependent . ' ' . $birthRetrieved . ' ' . $birthCaesar . ' ' . $birth . ' ' . $birthReason . '<br>
    <strong>Родовая деятельность. Родовая деятельность. Часть 2:</strong> ' . $birthAttendanceStimulation . ' ' . $birthAttendanceMechanically . ' ' . $birthAttendancePliers . ' Другое: ' . $birthAttendanceReadmore . ' ' . $anesthesiaLocalGeneral . ' ' . $anesthesiaGeneralGeneral . ' Подробнее: ' . $anesthesiaReadmore . ' <br>
    <strong>При рождении. Ребёнок закричал</strong>: ' . $screamedAtOnce . ' ' . $screamedAfterSuction . ' ' . $screamedPatting . ' ' . $screamedResuscitation . ' Подробнее: ' . $screamedReadmore . '<br>
    <strong>При рождении. Подлежание</strong>: ' . $breech . ' <br>
    <strong>При рождении. Рост</strong>: ' . $growth . ' <br>
    <strong>При рождении. Вес</strong>: ' . $weight . ' <br>
    <strong>При рождении. Оценка по шкале Апгар</strong>: ' . $apgar . ' <br>
    <strong>При рождении. Первое кормление наступило на</strong>: ' . $feeding . ' сутки <br>
    <strong>При рождении. Грудь взял</strong>: ' . $howActively . ' ' . $howSluggishly . ' ' . $howRefused . ' <br>
    <strong>При рождении. Имело место</strong>: ' . $waters . ' ' . $prosecution . ' ' . $hypoxia . ' ' . $fetus . ' ' . $umbilicalCord . ' ' . $infection . ' ' . $delay . ' ' . $asphyxiation . ' ' . $nothing . ' Подробнее: ' . $birthReadmore . ' <br>
    <strong>При рождении. Заключение после стационара</strong>: ' . $conclusion . ' <br>
    <strong>Развитие до года. Наблюдалось</strong>: ' . $restlessness . ' ' . $triangle . ' ' . $handTremor . ' ' . $blushing . ' ' . $hypertonicicty . ' ' . $violation . ' ' . $chinTremor . ' ' . $shudders . ' ' . $hypotonus . ' ' . $pulling . ' ' . $screaming . ' ' . $gi . ' ' . $colic . ' ' . $regurgitation . ' ' . $constipation . ' ' . $uptoayearNothing . ' Другое: ' . $uptoayearReadmore . ' <br>
    <strong>Моторные функции: Держал голову с</strong>: ' . $held . ' <br>
    <strong>Моторные функции: Самостоятельно садился</strong>: ' . $set . ' <br>
    <strong>Моторные функции: Самостоятельно переворачивался</strong>: ' . $turnedOver . ' <br>
    <strong>Моторные функции: Хватал игрушки с</strong>: ' . $grabbedToys . ' <br>
    <strong>Моторные функции: Ползал с</strong>: ' . $crowledSince . ' <br>
    <strong>Моторные функции: Ползал (много/мало/не ползал вообще)</strong>: ' . $crowledQuantity . ' <br>
    <strong>Моторные функции: Самостоятельно ходить начал с</strong>: ' . $walkingSince . ' <br>
    <strong>Моторные функции: Особенности дебюта ходьбы</strong>: ' . $debutFalling . ' ' . $debutAfraidToWalk . ' ' . $debutSlanted . ' ' . $debutRun . ' ' . $debutOnYourToes . ' Подробнее: ' . $debutReadmore . ' <br>
    <strong>Речевое развитие: Лепет с</strong>: ' . $speechLepetus . ' <br>
    <strong>Речевое развитие: Слов с</strong>: ' . $speechWordsFrom . ' <br>
    <strong>Речевое развитие: Фразы с</strong>: ' . $speechPhrases . ' <br>
    <strong>Ранний период. До 1 года</strong>: ' . $upToOneSarsAri . ' ' . $upToOneOtitis . ' ' . $upToOneMusculoskeletalDisorders . ' ' . $upToOneChronicDiseases . ' ' . $upToOneHeadInjury . ' ' . $upToOneGeneralAnesthesia . ' Подробнее, периодичность: ' . $upToOneDrugsReadmore . ' <br>
    <strong>Ранний период. Какие лекарственные препараты ребенок принимал до года</strong>: ' . $upToOneDrugs . ' <br>
    <strong>Ранний период. Какой рукой предпочтительно манипулировал до года</strong>: ' . $upToOneLeadingHand . ' <br>
    <strong>От года по настоящее время. Имели место</strong>: ' . $toDateLogoneurosis . ' ' . $toDateEncopresis . ' ' . $toDateVegerativeDisorders . ' ' . $toDateEnuresis . ' ' . $toDateFears . ' ' . $toDateFainting . ' ' . $toDateTics . ' ' . $toDateNothing . ' Подробнее: ' . $toDateReadmore . ' <br>
    <strong>От года по настоящее время. Часть 1. Имели место</strong>: ' . $toDateLogoneurosis . ' ' . $toDateDncopresis . ' ' . $toDateVegetativeDisorders . ' ' . $toDateDnuresis . ' ' . $toDateFears . ' ' . $toDateFainting . ' Подробнее: ' . $toDateReadmore . ' <br>
    <strong>От года по настоящее время. Наблюдается ли ребенок специалистом?</strong>: ' . $supervisionSpeechTherapist . ' ' . $supervisionNeurologist . ' ' . $supervisionPsychiatrist . ' Причина обращения к специалисту: ' . $supervisionReadmore . ' <br>
    <strong>От года по настоящее время. Какой рукой предпочтительно манипулирует в настоящее время?</strong>: ' . $leadHandNow . ' <br>
    <strong>От года по настоящее время. Имело ли место переучивание на другую руку</strong>: ' . $leadHandRetraining . ' <br>
    <strong>От года по настоящее время. Особенности сна, засыпания</strong>: ' . $sleepingHabits . ' <br>
    <strong>От года по настоящее время. Грудное вскармливание завершили в возрасте</strong>: ' . $endingOfBreastfeeding . ' <br>
    <strong>От года по настоящее время. Самостоятельно садился на горшок с возраста</strong>: ' . $becomeDry . ' <br>
    <strong>От года по настоящее время. Жалобы от учителя / воспитателя / педагога кружков</strong>: ' . $teachersComplaints . ' <br>
    <strong>От года по настоящее время. Взаимоотношения с окружающими</strong>: ' . $relationshipsWithOthers . ' <br>
	<strong>Есть ли что-то, что вам хотелось бы добавить? Расскажите, что считаете нужным</strong> ' . $anythingElse . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>