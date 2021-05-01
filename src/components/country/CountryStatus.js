import React, { PureComponent } from 'react'
import CountrySearch from './CountrySearch';
import CountryChart from './CountryChart';
import loadingSvg from '../../svg/loading.svg'
// import { CountryCodeContext } from '../Tracker'
class CountryStatus extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            inputText: "",
            placeholder: "",
            i: 0,

            data: null,
            countryCode: false
        }
    }

    static getDerivedStateFromProps = (props, state) => {

        if (typeof (props.country) === "string") {
            return {
                data: props.data,
                countryCode: props.country
            }
        }
        return {
            data: props.data,
        }
    }
    placeholderAnimation = () => {
        let i = this.state.i;
        try {

            const list = ["AF|Afghanistan", "AL|Albania", "DZ|Algeria", "AS|American Samoa", "AD|Andorra", "AO|Angola", "AI|Anguilla", "AQ|Antarctica", "AG|Antigua And Barbuda", "AR|Argentina", "AM|Armenia", "AW|Aruba", "AU|Australia", "AT|Austria", "AZ|Azerbaijan", "BS|Bahamas", "BH|Bahrain", "BD|Bangladesh", "BB|Barbados", "BY|Belarus", "BE|Belgium", "BZ|Belize", "BJ|Benin", "BM|Bermuda", "BT|Bhutan", "BO|Bolivia", "BA|Bosnia And Herzegovina", "BW|Botswana", "BV|Bouvet Island", "BR|Brazil", "IO|British Indian Ocean Territory", "BN|Brunei Darussalam", "BG|Bulgaria", "BF|Burkina Faso", "BI|Burundi", "KH|Cambodia", "CM|Cameroon", "CA|Canada", "CV|Cape Verde", "KY|Cayman Islands", "CF|Central African Republic", "TD|Chad", "CL|Chile", "CN|China", "CX|Christmas Island", "CC|Cocos (keeling) Islands", "CO|Colombia", "KM|Comoros", "CG|Congo", "CD|Congo, The Democratic Republic Of The", "CK|Cook Islands", "CR|Costa Rica", "CI|Cote D'ivoire", "HR|Croatia", "CU|Cuba", "CY|Cyprus", "CZ|Czech Republic", "DK|Denmark", "DJ|Djibouti", "DM|Dominica", "DO|Dominican Republic", "TP|East Timor", "EC|Ecuador", "EG|Egypt", "SV|El Salvador", "GQ|Equatorial Guinea", "ER|Eritrea", "EE|Estonia", "ET|Ethiopia", "FK|Falkland Islands (malvinas)", "FO|Faroe Islands", "FJ|Fiji", "FI|Finland", "FR|France", "GF|French Guiana", "PF|French Polynesia", "TF|French Southern Territories", "GA|Gabon", "GM|Gambia", "GE|Georgia", "DE|Germany", "GH|Ghana", "GI|Gibraltar", "GR|Greece", "GL|Greenland", "GD|Grenada", "GP|Guadeloupe", "GU|Guam", "GT|Guatemala", "GN|Guinea", "GW|Guinea-bissau", "GY|Guyana", "HT|Haiti", "HM|Heard Island And Mcdonald Islands", "VA|Holy See (vatican City State)", "HN|Honduras", "HK|Hong Kong", "HU|Hungary", "IS|Iceland", "IN|India", "ID|Indonesia", "IR|Iran, Islamic Republic Of", "IQ|Iraq", "IE|Ireland", "IL|Israel", "IT|Italy", "JM|Jamaica", "JP|Japan", "JO|Jordan", "KZ|Kazakstan", "KE|Kenya", "KI|Kiribati", "KP|Korea, Democratic People's Republic Of", "KR|Korea, Republic Of", "KV|Kosovo", "KW|Kuwait", "KG|Kyrgyzstan", "LA|Lao People's Democratic Republic", "LV|Latvia", "LB|Lebanon", "LS|Lesotho", "LR|Liberia", "LY|Libyan Arab Jamahiriya", "LI|Liechtenstein", "LT|Lithuania", "LU|Luxembourg", "MO|Macau", "MK|Macedonia, The Former Yugoslav Republic Of", "MG|Madagascar", "MW|Malawi", "MY|Malaysia", "MV|Maldives", "ML|Mali", "MT|Malta", "MH|Marshall Islands", "MQ|Martinique", "MR|Mauritania", "MU|Mauritius", "YT|Mayotte", "MX|Mexico", "FM|Micronesia, Federated States Of", "MD|Moldova, Republic Of", "MC|Monaco", "MN|Mongolia", "MS|Montserrat", "ME|Montenegro", "MA|Morocco", "MZ|Mozambique", "MM|Myanmar", "NA|Namibia", "NR|Nauru", "NP|Nepal", "NL|Netherlands", "AN|Netherlands Antilles", "NC|New Caledonia", "NZ|New Zealand", "NI|Nicaragua", "NE|Niger", "NG|Nigeria", "NU|Niue", "NF|Norfolk Island", "MP|Northern Mariana Islands", "NO|Norway", "OM|Oman", "PK|Pakistan", "PW|Palau", "PS|Palestinian Territory, Occupied", "PA|Panama", "PG|Papua New Guinea", "PY|Paraguay", "PE|Peru", "PH|Philippines", "PN|Pitcairn", "PL|Poland", "PT|Portugal", "PR|Puerto Rico", "QA|Qatar", "RE|Reunion", "RO|Romania", "RU|Russian Federation", "RW|Rwanda", "SH|Saint Helena", "KN|Saint Kitts And Nevis", "LC|Saint Lucia", "PM|Saint Pierre And Miquelon", "VC|Saint Vincent And The Grenadines", "WS|Samoa", "SM|San Marino", "ST|Sao Tome And Principe", "SA|Saudi Arabia", "SN|Senegal", "RS|Serbia", "SC|Seychelles", "SL|Sierra Leone", "SG|Singapore", "SK|Slovakia", "SI|Slovenia", "SB|Solomon Islands", "SO|Somalia", "ZA|South Africa", "GS|South Georgia And The South Sandwich Islands", "ES|Spain", "LK|Sri Lanka", "SD|Sudan", "SR|Suriname", "SJ|Svalbard And Jan Mayen", "SZ|Swaziland", "SE|Sweden", "CH|Switzerland", "SY|Syrian Arab Republic", "TW|Taiwan, Province Of China", "TJ|Tajikistan", "TZ|Tanzania, United Republic Of", "TH|Thailand", "TG|Togo", "TK|Tokelau", "TO|Tonga", "TT|Trinidad And Tobago", "TN|Tunisia", "TR|Turkey", "TM|Turkmenistan", "TC|Turks And Caicos Islands", "TV|Tuvalu", "UG|Uganda", "UA|Ukraine", "AE|United Arab Emirates", "GB|United Kingdom", "US|United States", "UM|United States Minor Outlying Islands", "UY|Uruguay", "UZ|Uzbekistan", "VU|Vanuatu", "VE|Venezuela", "VN|Viet Nam", "VG|Virgin Islands, British", "VI|Virgin Islands, U.s.", "WF|Wallis And Futuna", "EH|Western Sahara", "YE|Yemen", "ZM|Zambia", "ZW|Zimbabwe"];

            let j = 0;
            let word = list[i];
            let fn = () => {
                this.setState((prev) => ({ placeholder: prev.placeholder + word[j] }), () => {
                    j++
                    if (j > word.length) {
                        j = 0;
                        i++;
                        this.setState({ placeholder: "" }, () => { word = list[i]; })

                    }
                    if (i === list.length) {
                        i = 0
                    }
                })
                this.setState({ i })
            }
            this.placeholderInterval = setInterval(fn, 600)
        } catch (error) {
            console.log(error);
            clearInterval(this.placeholderInterval);
        }
    }
    componentDidMount() {

        this.placeholderAnimation();

    }


    componentWillUnmount() {
        clearInterval(this.placeholderInterval);
    }

    handleTextInputChange = (inputText, clear = false) => {
        if (clear) {
            this.setState({
                inputText: ''
            })
            return
        }
        this.setState({
            inputText
        })
    }

    handleClearPlaceHolder = (placeholder) => {
        clearInterval(this.placeholderInterval);
        this.setState({
            placeholder
        })
    }

    render() {
        const { inputText, placeholder } = this.state
        
        return (
            <div className="w-full row-start-2 lg:row-start-1 lg:col-start-2 lg:row-span-2">
                <CountrySearch
                    value={inputText}
                    placeholder={placeholder}
                    handleTextInputChange={this.handleTextInputChange}
                    clearPlaceHolder={this.handleClearPlaceHolder}
                    placeholderAnimation={this.placeholderAnimation}
                    handleGetLocation={this.props.handleGetLocation}
                    data={this.state.data}
                />
                {
                    this.state.data && this.state.countryCode && <CountryChart countryCode={this.state.countryCode} data={this.state.data} />
                }
                {
                    !this.state.data && !this.state.countryCode && < div className="h-full lg:h-2/4 py-20 flex flex-col justify-center text-gray-500 font-semibold text-center" id="chart">
                        <p className="text-xl flex justify-center items-center"> Loading Data<img src={loadingSvg} className="w-1/12" alt='loading icon' /></p>
                    </div>
                }
                {
                    this.state.data && !this.state.countryCode && < div className="py-8  lg:py-0 h-full lg:h-2/4 flex flex-col justify-center items-center text-gray-800 dark:text-gray-400 text-center text-sm   md:text-lg px-5 md:px-10" id="chart">
                        <p className="text-opacity-90 text-red-500 font-bold mb-3"> Failed to access your location.</p>
                        <p className="text-opacity-90">If you want to see your country status and data, click on the reload button and allow the location access.</p>
                        <button onClick={()=>this.props.handleGetLocation()} className="p-4 my-4 focus:outline-none"><i className="fal fa-redo-alt text-2xl"></i></button>
                        <p className="text-opacity-90 ">To see other countries status data , search the country name on the search field or click on the country in countries table.</p>
                    </div>
                }
                {/* <CountryCodeContext.Consumer>
                    {
                        ([data, handler, countryCode]) => {
                            
                            if (data && countryCode && false) {
                                // console.log(countryCode,"context")
                                return <CountryChart countryCode={countryCode} data={data} />
                            } else {
                                return (
                                   
                                )
                            }

                        }
                    }
                </CountryCodeContext.Consumer> */}

            </div >
        )
    }
}

export default CountryStatus
