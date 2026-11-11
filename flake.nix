{
  description = "erdos site: landing page and documentation";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        tools = [ pkgs.nodejs_22 ];

        # `nix run`: live-reloading dev server on http://localhost:4321
        dev = pkgs.writeShellApplication {
          name = "erdos-site-dev";
          runtimeInputs = tools;
          text = ''
            [ -d node_modules ] || npm ci --no-audit --no-fund
            exec npm run dev
          '';
        };

        # `nix run .#preview`: the production build, as GitHub Pages will serve it (search works here)
        preview = pkgs.writeShellApplication {
          name = "erdos-site-preview";
          runtimeInputs = tools;
          text = ''
            [ -d node_modules ] || npm ci --no-audit --no-fund
            npm run build
            exec npm run preview
          '';
        };
      in {
        devShells.default = pkgs.mkShell {
          packages = tools;
          shellHook = ''
            echo "erdos site dev shell: node $(node --version)"
            echo "  nix run            dev server on :4321 (live reload)"
            echo "  nix run .#preview  production build on :4321 (search works)"
          '';
        };

        apps.default = { type = "app"; program = "${dev}/bin/erdos-site-dev"; };
        apps.preview = { type = "app"; program = "${preview}/bin/erdos-site-preview"; };
      });
}
