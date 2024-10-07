import { OptionalNextjsAssetsDeploymentProps } from "../generated-structs/OptionalNextjsAssetsDeploymentProps";
import { OptionalNextjsBuildProps } from "../generated-structs/OptionalNextjsBuildProps";
import { OptionalNextjsFileSystemProps } from "../generated-structs/OptionalNextjsFileSystemProps";
import { OptionalNextjsVpcProps } from "../generated-structs/OptionalNextjsVpcProps";
import { NextjsAssetDeploymentOverrides } from "../nextjs-assets-deployment";
import { NextjsBuildOverrides } from "../nextjs-build/nextjs-build";
import { NextjsFileSystemOverrides } from "../nextjs-file-system";
import { NextjsVpcOverrides } from "../nextjs-vpc";

/**
 * Base overrides for the props passed to constructs within root/top-level Next.js constructs
 */
export interface BaseNextjsConstructOverrides {
  readonly nextjsBuildProps?: OptionalNextjsBuildProps;
  readonly nextjsVpcProps?: OptionalNextjsVpcProps;
  readonly nextjsFileSystemProps?: OptionalNextjsFileSystemProps;
  readonly nextjsAssetsDeploymentProps?: OptionalNextjsAssetsDeploymentProps;
}

/**
 * Base overrides for constructs shared between all root/top-level Next.js constructs.
 */
export interface BaseNextjsOverrides {
  readonly nextjsBuild?: NextjsBuildOverrides;
  readonly nextjsFileSystem?: NextjsFileSystemOverrides;
  readonly nextjsVpc?: NextjsVpcOverrides;
  readonly nextjsAssetsDeployment?: NextjsAssetDeploymentOverrides;
}
