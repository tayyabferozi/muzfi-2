import GradientBtn from "../../../buttons/GradientBtn/GradientBtn";

const Subscriptions = () => {
  return (
    <div className="mt-7">
      <div className="sm:w-[370px] mx-auto bg-white border border-solid border-accentGray-600 p-[10px] flex rounded-lg">
        <div className="bg-gradient-to-l from-red-500 to-yellow-500 text-white font-semibold min-h-[44px] flex items-center justify-center flex-grow rounded-md">
          Yearly
        </div>
        <div className=" text-accentGray-200 font-semibold min-h-[44px] flex items-center justify-center flex-grow rounded-md">
          Monthly
        </div>
      </div>
      <div className="mt-7 grid sm:grid-cols-3 gap-4 max-w-[882px] mx-auto">
        <div className="bg-white border border-solid border-accentGray-600 py-10 px-7 text-center rounded-lg">
          <div className="text-2xl font-semibold">Rookie</div>
          <div className="text-xs">Best for personal use</div>
          <div className="mt-6 text-5xl font-bold text-primary-gradient">
            Free
          </div>
          <div className="text-accentGray-700 font-semibold">FOREVER</div>
          <div className="my-6 flex justify-center">
            <GradientBtn className="w-full" label="Free Forever" />
          </div>
          <div className="font-semibold">POST REVIEWS AND TOPIC</div>

          <div className="mt-3 font-semibold text-xs">
            <div className="font-semibold my-2">View All Postings</div>
            <div className="font-semibold my-2">Two-Factor Authentiction</div>
            <div className="font-semibold my-2">Collaborative Docs</div>
            <div className="font-semibold my-2">Whiteboards</div>
            <div className="font-semibold my-2">Everything View</div>
            <div className="font-semibold my-2">Real-Time Chat</div>
            <div className="font-semibold my-2">Kanban Boards</div>
            <div className="font-semibold my-2">Sprint Management</div>
            <div className="font-semibold my-2">Native Time Tracking</div>
            <div className="font-semibold my-2">Calendar View</div>
            <div className="font-semibold my-2">In-App Video Recording</div>
            <div className="font-semibold my-2">24/7 Support</div>
          </div>
        </div>
        <div className="bg-white border border-solid border-accentGray-600 py-10 px-7 text-center rounded-lg">
          <div className="text-2xl font-semibold">Pro</div>
          <div className="text-xs">Best for personal use</div>
          <div className="mt-6 text-5xl font-bold text-primary-gradient">
            2.99
          </div>
          <div className="text-accentGray-700 font-semibold">
            PER MEMBER PER MONTH
          </div>
          <div className="my-6 flex justify-center">
            <GradientBtn className="w-full" label="Get Started" />
          </div>
          <div className="font-semibold">EVERYTHING IN FREE FOREVER AND</div>

          <div className="mt-3 font-semibold text-xs">
            <div className="font-semibold my-2">Unlimited Storage</div>
            <div className="font-semibold my-2">Unlimited Integrations</div>
            <div className="font-semibold my-2">Unlimited Dashboards</div>
            <div className="font-semibold my-2">Guests with Permissions</div>
            <div className="font-semibold my-2">Unlimited Gantt Charts</div>
            <div className="font-semibold my-2">Unlimited Custom Fields</div>
            <div className="font-semibold my-2">Email in ClickUp</div>
            <div className="font-semibold my-2">Teams (User Groups)</div>
            <div className="font-semibold my-2">Goals & Portfolios</div>
            <div className="font-semibold my-2">Form View</div>
            <div className="font-semibold my-2">Resource Management</div>
            <div className="font-semibold my-2">Agile Reporting</div>
            <div className="font-semibold my-2 text-accentBlue-500">
              AI Compatible
            </div>
          </div>
        </div>
        <div className="bg-white border border-solid border-accentGray-600 py-10 px-7 text-center rounded-lg">
          <div className="text-2xl font-semibold">Elite</div>
          <div className="text-xs">Best for personal use</div>
          <div className="mt-6 text-5xl font-bold text-primary-gradient">
            3.99
          </div>
          <div className="text-accentGray-700 font-semibold">
            PER MEMBER PER MONTH
          </div>
          <div className="my-6 flex justify-center">
            <GradientBtn className="w-full" label="Free Forever" />
          </div>
          <div className="font-semibold">POST REVIEWS AND TOPIC</div>

          <div className="mt-3 font-semibold text-xs">
            <div className="font-semibold my-2">Google SSO</div>
            <div className="font-semibold my-2">Unlimited Teams</div>
            <div className="font-semibold my-2">Custom Exporting</div>
            <div className="font-semibold my-2">Advanced Public Sharing</div>
            <div className="font-semibold my-2">Advanced Automations</div>
            <div className="font-semibold my-2">
              Advanced Dashboard Features
            </div>
            <div className="font-semibold my-2">Advanced Time Tracking</div>
            <div className="font-semibold my-2">Granular Time Estimates</div>
            <div className="font-semibold my-2">Timelines & Mind Maps</div>
            <div className="font-semibold my-2">Goal Folders</div>
            <div className="font-semibold my-2 text-accentBlue-500">
              AI Compatible
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-4 text-center font-semibold text-2xl">
        Why go Premium?
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        <div className="bg-white border border-solid border-accentGray-600 p-4 text-center rounded-lg">
          <div className="font-semibold">Download music.</div>
          <div className="font-medium mt-1 text-xs">Listen anywhere.</div>
        </div>
        <div className="bg-white border border-solid border-accentGray-600 p-4 text-center rounded-lg">
          <div className="font-semibold">Ad free music listening.</div>
          <div className="font-medium mt-1 text-xs">Enjoy Nonstop Music</div>
        </div>
        <div className="bg-white border border-solid border-accentGray-600 p-4 text-center rounded-lg">
          <div className="font-semibold">Play any song.</div>
          <div className="font-medium mt-1 text-xs">Even On Mobile.</div>
        </div>
        <div className="bg-white border border-solid border-accentGray-600 p-4 text-center rounded-lg">
          <div className="font-semibold">Unlimited skips.</div>
          <div className="font-medium mt-1 text-xs">Just Hit Next.</div>
        </div>
      </div>

      <div className="mt-10 mb-4 text-center font-semibold text-2xl">
        Earn Money Building Communities
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        <div className="bg-white border border-solid border-accentGray-600 p-4 text-center rounded-lg">
          <div className="font-semibold">Creative Practitioner</div>
          <div className="flex justify-center">
            <div className="bg-accentGray-400 py-3 px-4 text-accentGray-700 my-3 rounded-lg">
              $59 Monthly*
            </div>
          </div>

          <ul className="text-xs text-start list-disc pl-4">
            <li className="mb-1">Individual Membership</li>
            <li className="mb-1">Enjoy up to 2 free classes per session</li>
            <li className="mb-1">
              Special Member pricing for events and retreats
            </li>
            <li className="mb-1">
              2 Guest passes per year for friends/family to come to one entire
              course for free (pass valued at $150)
            </li>
            <li className="mb-1">
              Made possible by generous donations from Members/donors
            </li>
          </ul>
        </div>
        <div className="bg-white border border-solid border-accentGray-600 p-4 text-center rounded-lg">
          <div className="font-semibold">Better Together</div>
          <div className="flex justify-center">
            <div className="bg-accentGray-400 py-3 px-4 text-accentGray-700 my-3 rounded-lg">
              $99 Monthly*
            </div>
          </div>

          <ul className="text-xs text-start list-disc pl-4">
            <li className="mb-1">Individual Membership</li>
            <li className="mb-1">Enjoy up to 2 free classes per session</li>
            <li className="mb-1">
              Special Member pricing for events and retreats
            </li>
            <li className="mb-1">
              2 Guest passes per year for friends/family to come to one entire
              course for free (pass valued at $150)
            </li>
            <li className="mb-1">
              Made possible by generous donations from Members/donors
            </li>
          </ul>
        </div>
        <div className="bg-white border border-solid border-accentGray-600 p-4 text-center rounded-lg">
          <div className="font-semibold">Fueling Sustainer</div>
          <div className="flex justify-center">
            <div className="bg-accentGray-400 py-3 px-4 text-accentGray-700 my-3 rounded-lg">
              $125 Monthly*
            </div>
          </div>

          <ul className="text-xs text-start list-disc pl-4">
            <li className="mb-1">Individual Membership</li>
            <li className="mb-1">Enjoy up to 2 free classes per session</li>
            <li className="mb-1">
              Special Member pricing for events and retreats
            </li>
            <li className="mb-1">
              2 Guest passes per year for friends/family to come to one entire
              course for free (pass valued at $150)
            </li>
            <li className="mb-1">
              Made possible by generous donations from Members/donors
            </li>
          </ul>
        </div>
        <div className="bg-white border border-solid border-accentGray-600 p-4 text-center rounded-lg">
          <div className="font-semibold">Fueling Sustainer</div>
          <div className="flex justify-center">
            <div className="bg-accentGray-400 py-3 px-4 text-accentGray-700 my-3 rounded-lg">
              $125 Monthly*
            </div>
          </div>

          <ul className="text-xs text-start list-disc pl-4">
            <li className="mb-1">Individual Membership</li>
            <li className="mb-1">Enjoy up to 2 free classes per session</li>
            <li className="mb-1">
              Special Member pricing for events and retreats
            </li>
            <li className="mb-1">
              2 Guest passes per year for friends/family to come to one entire
              course for free (pass valued at $150)
            </li>
            <li className="mb-1">
              Made possible by generous donations from Members/donors
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
