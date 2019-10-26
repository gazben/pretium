import KeplerGlSchema from 'kepler.gl/schemas';
import { DataPoint } from '../store';
// import { config, datasets as myDatasets } from './akarmi';

type FieldDescriptorType = 'string' | 'real' | 'timestamp';

interface FieldDescriptor {
  name: string;
  format: string;
  type: FieldDescriptorType;
}

interface KeplerDataSet {
  id: string;
  label: string;
  color: number[];
  allData: unknown[];
  fields: FieldDescriptor[];
}

interface DataSet {
  version?: string;
  data: KeplerDataSet;
}

export function loadToKepler(id: string, label: string, data: DataPoint[]) {
  const datasets = generateDatasets(id, label, data);
  const config = generateConfig(id, label);
  return KeplerGlSchema.load(datasets, config);
}

function generateConfig(id: string, label: string) {
  return {
    version: 'v1',
    config: {
      visState: {
        filters: [],
        layers: [
          {
            id,
            type: 'point',
            config: {
              dataId: id,
              label,
              color: [183, 136, 94],
              columns: { lat: 'lat', lng: 'lng', altitude: null },
              isVisible: true,
              visConfig: {
                radius: 10,
                fixedRadius: false,
                opacity: 0.8,
                outline: false,
                thickness: 2,
                strokeColor: null,
                colorRange: {
                  name: 'Global Warming',
                  type: 'sequential',
                  category: 'Uber',
                  colors: [
                    '#5A1846',
                    '#900C3F',
                    '#C70039',
                    '#E3611C',
                    '#F1920E',
                    '#FFC300'
                  ]
                },
                strokeColorRange: {
                  name: 'Global Warming',
                  type: 'sequential',
                  category: 'Uber',
                  colors: [
                    '#5A1846',
                    '#900C3F',
                    '#C70039',
                    '#E3611C',
                    '#F1920E',
                    '#FFC300'
                  ]
                },
                radiusRange: [0, 50],
                filled: true
              },
              textLabel: [
                {
                  field: null,
                  color: [255, 255, 255],
                  size: 18,
                  offset: [0, 0],
                  anchor: 'start',
                  alignment: 'center'
                }
              ]
            },
            visualChannels: {
              colorField: null,
              colorScale: 'quantile',
              strokeColorField: null,
              strokeColorScale: 'quantile',
              sizeField: null,
              sizeScale: 'linear'
            }
          }
        ],
        interactionConfig: {
          tooltip: {
            fieldsToShow: {
              oh828l7t: ['device', 'dateTime', 'id', 'timestamp']
            },
            enabled: true
          },
          brush: { size: 0.5, enabled: false }
        },
        layerBlending: 'normal',
        splitMaps: [],
        animationConfig: { currentTime: null, speed: 1 }
      }
    }
  };
}

function generateDatasets(
  id: string,
  label: string,
  data: DataPoint[]
): DataSet[] {
  return [
    {
      version: 'v1',
      data: mapToKeplerData(id, label, data)
    }
  ];
}

function mapToKeplerData(
  id: string,
  label: string,
  data: DataPoint[]
): KeplerDataSet {
  return {
    id,
    label,
    color: [143, 47, 191],
    fields: [
      { name: 'lat', type: 'real', format: '' },
      { name: 'lng', type: 'real', format: '' },
      { name: 'device', type: 'string', format: '' },
      { name: 'dateTime', type: 'timestamp', format: 'M/D/YYYY H:m' },
      { name: 'id', type: 'timestamp', format: 'x' },
      { name: 'timestamp', type: 'timestamp', format: 'X' }
    ],
    allData: [
      ...data.map(p => [
        +p.lat,
        +p.lng,
        p.device,
        p.dateTime,
        p.id,
        +p.timestamp
      ])
    ]
  };
}
