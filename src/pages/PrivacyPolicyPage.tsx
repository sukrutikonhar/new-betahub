import React from 'react';
import { Lock, Database, UserCheck, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { getSEOConfig } from '../config/seoConfig';
import ReadingProgress from '../components/ReadingProgress';

const PrivacyPolicyPage: React.FC = () => {
    const seoData = getSEOConfig('/privacy-policy');

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
            <SEO
                title={seoData.title}
                description={seoData.description}
                keywords={seoData.keywords}
                ogImage={seoData.ogImage}
            />

            {/* Hero Section */}
            <section className="w-full relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E8CAF7 0%, #F0D7F9 20%, #F8E4FC 40%, #FCF0FF 60%, #FEF8FF 80%, #FFFFFF 100%)' }}>
                <div className="section-container section-padding max-w-6xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{ color: '#343f52' }}>
                            Privacy Policy
                        </h1>
                        <p className="text-sm text-gray-500">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="w-full bg-white">
                <div className="section-container section-padding">
                    <div className="max-w-6xl mx-auto">
                        <div className="prose prose-lg max-w-none">

                            {/* Introduction */}
                            <div className="mb-12">
                                <p className="text-lg leading-relaxed mb-6" style={{ color: '#60697b' }}>
                                    This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                                </p>
                                <p className="text-lg leading-relaxed" style={{ color: '#60697b' }}>
                                    We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                                </p>
                            </div>

                            {/* Interpretation and Definitions */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#343f52' }}>
                                    <FileText className="w-8 h-8 text-purple-600" />
                                    Interpretation and Definitions
                                </h2>

                                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#343f52' }}>Interpretation</h3>
                                <p className="text-lg leading-relaxed mb-6" style={{ color: '#60697b' }}>
                                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                                </p>

                                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#343f52' }}>Definitions</h3>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    For the purposes of this Privacy Policy:
                                </p>
                                <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#60697b' }}>
                                    <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                                    <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to BetaHub.ai.</li>
                                    <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                                    <li><strong>Country</strong> refers to: United States</li>
                                    <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                                    <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                                    <li><strong>Service</strong> refers to the Website.</li>
                                    <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                                    <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                                    <li><strong>Website</strong> refers to BetaHub.ai, accessible from https://www.betahub.ai</li>
                                    <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                                </ul>
                            </div>

                            {/* Collecting and Using Your Personal Data */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#343f52' }}>
                                    <Database className="w-8 h-8 text-purple-600" />
                                    Collecting and Using Your Personal Data
                                </h2>

                                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#343f52' }}>Types of Data Collected</h3>

                                <h4 className="text-xl font-semibold mb-4" style={{ color: '#343f52' }}>Personal Data</h4>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                                </p>
                                <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#60697b' }}>
                                    <li>Email address</li>
                                    <li>First name and last name</li>
                                    <li>Usage Data</li>
                                </ul>

                                <h4 className="text-xl font-semibold mb-4" style={{ color: '#343f52' }}>Usage Data</h4>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    Usage Data is collected automatically when using the Service.
                                </p>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                                </p>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                                </p>
                                <p className="text-lg leading-relaxed mb-6" style={{ color: '#60697b' }}>
                                    We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                                </p>

                                <h4 className="text-xl font-semibold mb-4" style={{ color: '#343f52' }}>Use of Your Personal Data</h4>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    The Company may use Personal Data for the following purposes:
                                </p>
                                <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#60697b' }}>
                                    <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
                                    <li>To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                                    <li>For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                                    <li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                                    <li>To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
                                    <li>To manage Your requests: To attend and manage Your requests to Us.</li>
                                    <li>For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
                                    <li>For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
                                </ul>
                            </div>

                            {/* Disclosure of Your Personal Data */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#343f52' }}>
                                    <UserCheck className="w-8 h-8 text-purple-600" />
                                    Disclosure of Your Personal Data
                                </h2>

                                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#343f52' }}>Business Transfers</h3>
                                <p className="text-lg leading-relaxed mb-6" style={{ color: '#60697b' }}>
                                    If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                                </p>

                                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#343f52' }}>Law enforcement</h3>
                                <p className="text-lg leading-relaxed mb-6" style={{ color: '#60697b' }}>
                                    Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                                </p>

                                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#343f52' }}>Other legal requirements</h3>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                                </p>
                                <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#60697b' }}>
                                    <li>Comply with a legal obligation</li>
                                    <li>Protect and defend the rights or property of the Company</li>
                                    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                                    <li>Protect the personal safety of Users of the Service or the public</li>
                                    <li>Protect against legal liability</li>
                                </ul>
                            </div>

                            {/* Security of Your Personal Data */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#343f52' }}>
                                    <Lock className="w-8 h-8 text-purple-600" />
                                    Security of Your Personal Data
                                </h2>
                                <p className="text-lg leading-relaxed" style={{ color: '#60697b' }}>
                                    The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                                </p>
                            </div>

                            {/* Links to Other Websites */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6" style={{ color: '#343f52' }}>
                                    Links to Other Websites
                                </h2>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
                                </p>
                                <p className="text-lg leading-relaxed" style={{ color: '#60697b' }}>
                                    We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                                </p>
                            </div>

                            {/* Changes to this Privacy Policy */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6" style={{ color: '#343f52' }}>
                                    Changes to this Privacy Policy
                                </h2>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
                                </p>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
                                </p>
                                <p className="text-lg leading-relaxed" style={{ color: '#60697b' }}>
                                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                                </p>
                            </div>

                            {/* Contact Us */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6" style={{ color: '#343f52' }}>
                                    Contact Us
                                </h2>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    If you have any questions about this Privacy Policy, You can contact us:
                                </p>
                                <div className="bg-gray-50 rounded-lg p-6" style={{ color: '#60697b' }}>
                                    <p><strong>By email:</strong> info@betahub.ai</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Reading Progress */}
            <ReadingProgress color="#3c1470" size="md" />
        </div>
    );
};

export default PrivacyPolicyPage;
