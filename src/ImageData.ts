// Coypright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { Node } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type IGatsbyImageDataParent<T = never> = T & {
  gatsbyImageData: IGatsbyImageData;
};

type FileNode = Node & {
  childImageSharp?: IGatsbyImageDataParent<Node>;
};

type ImageData = FileNode | IGatsbyImageDataParent | IGatsbyImageData;

export default ImageData;
