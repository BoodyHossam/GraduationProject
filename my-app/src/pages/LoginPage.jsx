import harakaLogo from "../assets/HarakaDynamicRunnerLogo.png";
import heroImage from "../assets/loginPage.png";

const features = [
  { name: "Track Progress", icon: "progress" },
  { name: "Manage Patients", icon: "patients" },
  { name: "Build Better Recovery", icon: "recovery" },
];

function BrandLogo({ compact = false }) {
  return (
    <div className={`brand ${compact ? "brand-compact" : ""}`}>
      <img src={harakaLogo} alt="Haraka logo" className="brand-svg" />
    </div>
  );
}

function Icon({ type, className }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
  };

  switch (type) {
    case "progress":
      return (
        <svg {...common}>
          <path d="M4 18V8m5 10V4m5 14v-8m5 8V6" />
          <path d="M3 18h18" />
        </svg>
      );
    case "patients":
      return (
        <svg {...common}>
          <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M16 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M4 18c1.2-2.2 3.2-3.3 5.5-3.3S12.8 15.8 14 18" />
          <path d="M13.5 18c1.1-2 2.6-3 4.5-3 1.6 0 2.9.7 4 2.2" />
        </svg>
      );
    case "recovery":
      return (
        <svg {...common}>
          <path d="M12 5v14" />
          <path d="M5 12h14" />
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
    case "eye":
      return (
        <svg {...common}>
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    default:
      return null;
  }
}

export default function LoginPage() {
  return (
    <section className="auth-screen">
      <div className="auth-visual">
        <BrandLogo />
        <h1>Away to do better</h1>
        <div
          className="therapy-figure"
          aria-label="Therapist treating patient"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02)), url(${heroImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="feature-row">
          {features.map((feature) => (
            <div className="feature-item" key={feature.name}>
              <div className="feature-icon">
                <Icon type={feature.icon} />
              </div>
              <span>{feature.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p className="subtitle">Sign in to your account to continue</p>

        <label className="field-label" htmlFor="username">
          Username or Email
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username or email"
        />

        <label className="field-label" htmlFor="password">
          Password
        </label>
        <div className="password-wrap">
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
          <button
            type="button"
            className="eye-button"
            aria-label="Show password"
          >
            <Icon type="eye" className="eye-icon" />
          </button>
        </div>

        <div className="meta-row">
          <label className="remember-me">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <a href="#" className="link">
            Forgot password?
          </a>
        </div>

        <button type="button" className="primary-button">
          Sign In
        </button>
        <p className="account-note">
          Don't have an account?{" "}
          <a href="#" className="link">
            Contact your administrator
          </a>
        </p>
      </div>
    </section>
  );
}
