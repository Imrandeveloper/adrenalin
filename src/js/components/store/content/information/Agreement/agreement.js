import styles from './../information.css';
import React,{Component} from 'react';

export default class AgreementInfo extends Component {

    render() {
        return (
            <div className={styles.information}>
                <div className={styles.textBlock}>
                    <h3>ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</h3>
                    <p>Администрация сервиса и Пользователь заключили настоящее пользовательское соглашение о нижеследующем.</p>
                </div>

                <div className={styles.textBlock}>
                    <ol>
                        <li>
                            Термины и определения
                            <ol>
                                <li>В настоящем пользовательском соглашении применяются термины и определения, установленные в политике конфиденциальности.</li>
                            </ol>
                        </li>
                        <li>
                            Предмет соглашения
                            <ol>
                                <li>Администратор в случае использования Сайта без регистрации предоставляет Пользователю возможность использовать веб сервис «In tenders» для ознакомления с опубликованной на нем информацией и связи с Администратором.</li>
                                <li>Администратор в случае использования Сайта Пользователем после осуществления регистрации и при отсутствии какого-либо иного соглашения (договора) заключенного с Пользователем предоставляет возможность Пользователю использовать веб сервис «In tenders» в целях, предусмотренных п. 1.1 настоящего соглашения, а также с целью демонстрационного (тестового) доступа к услугам.</li>
                                <li>В случае наличия между Администратором и Пользователем иного соглашения (договора), связанного с использованием веб сервиса «In tenders», применяются условия такого соглашения (договора), а  Пользовательское соглашение считается не заключенным.</li>
                            </ol>
                        </li>
                        <li>
                            Общие положения
                            <ol>
                                <li>Регистрация Пользователя осуществляется добровольно. Факт регистрации выражает намерение заключить двустороннее соглашение об оказании возмездных услуг.</li>
                                <li>Администрация сайта самостоятельно определяет пределы использования возможностей веб сервиса «In tenders», запрещает или разрешает доступ к любым разделам без каких-либо уведомлений Пользователя.</li>
                                <li>Администратор не несет ответственность за любой прямой или косвенный ущерб, причиненный</li>
                            </ol>
                        </li>
                    </ol>
                </div>
                <div className={styles.textBlock}>
                    <h3>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h3>
                    <p>г.  Ростов-на-Дону</p>
                </div>

                <div className={styles.textBlock}>
                    <p>Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в отношении всей информации, которую веб-сервис «In tenders»,  расположенный на доменном имени www.intenders, может получить о Пользователе во время использования программного продукта.</p>

                    <ol>
                        <li>
                            ОПРЕДЕЛЕНИЕ ТЕРМИНОВ
                            <ol>
                                <li>
                                    В настоящей Политике конфиденциальности используются следующие термины:
                                    <ol>
                                        <li>«Администрация веб-сервиса «In tenders» (далее – Администратор) » – уполномоченные сотрудники на управления ресурсом, действующие от имени компании «In tenders»,  которые организуют и (или) осуществляет обработку персональных данных, а также определяет цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.</li>
                                        <li>«Персональные данные» - любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).</li>
                                        <li>«Обработка персональных данных» - любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</li>
                                        <li>«Конфиденциальность персональных данных» - обязательное для соблюдения Оператором или иным получившим доступ к персональным данным лицом требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания.</li>
                                        <li>«Пользователь веб сервиса «In tenders» (далее ‑ Пользователь)» – лицо, имеющее доступ к ресурсу, посредством сети Интернет и использующее сервис «In tenders».</li>
                                        <li>«Cookies» — небольшой фрагмент данных, отправленный веб-сервером и хранимый на компьютере.</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </div>
            </div>
        );
    }
}